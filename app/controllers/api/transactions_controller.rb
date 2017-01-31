class Api::TransactionsController < ApplicationController

  def index
    # query params will include user_id and company_id
    @transactions = Transaction.where('user_id = ? AND company_id = ?',
                                      params[:user_id],
                                      params[:company_id])
  end

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      # update or create entry in stock table

    else
      # return error

    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:user_id, :company_id,
                                        :price, :stock_count)
  end
end
