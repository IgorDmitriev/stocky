class Api::TransactionsController < ApplicationController

  def index
    # query params will include user_id and company_id
    @transactions = Transaction.where('user_id = ? AND company_id = ?',
                                      params[:user_id],
                                      params[:company_id])
  end

  def create
    @user = User.find(params[:user_id])
    @transaction = Transaction.new(transaction_params)
    @stock = Stock.find_or_create_by(user_id: transaction_params[:user_id],
                                     company_id: transaction_params[:company_id])
    @stock.shares ||= 0

    if !@user
      return json: ['Not logged in'], status: 401
    elsif @user.money < @transaction.price * @transaction.stock_count
      return json: ['Not enough money'], status: 400
    elsif @stock.shares + @transaction.stock_count < 0
      return json: ['Cannot sell more shares than owned'], status: 400
    else
      @transaction.save
      @stock.update_attributes(transaction.params)
      @user.update_attributes(money: - @transaction.price *
                                       @transaction.stock_count)
      # TODO: write the view for stock
      return status: 200
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:user_id, :company_id,
                                        :price, :stock_count)
  end
end
