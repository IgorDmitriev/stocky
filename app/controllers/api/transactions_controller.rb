class Api::TransactionsController < ApplicationController

  def index
    @transactions = Transaction.where('user_id = ? AND company_id = ?',
                                      current_user.id,
                                      params[:company_id])
    render 'api/transactions/index'
  end

  def create
    @user = User.find(current_user.id)
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = @user.id
    @transaction.stock_count = @transaction.stock_count.to_i
    @stock = Stock.find_or_create_by(user_id: @user.id,
                                     company_id: transaction_params[:company_id])
    @stock.shares ||= 0

    if !@user
      render json: ['Not logged in'], status: 401
    elsif @user.money < @transaction.price * @transaction.stock_count
      render json: ['Not enough money'], status: 400
    elsif @stock.shares + @transaction.stock_count < 0
      render json: ['Cannot sell more shares than owned'], status: 400
    else
      @transaction.save
      @stock.update_attributes(shares: @transaction.stock_count)
      @user.update_attributes(money: @user.money - @transaction.price *
                                     @transaction.stock_count)
      render 'api/transactions/show'
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:user_id, :company_id,
                                        :price, :stock_count)
  end
end
