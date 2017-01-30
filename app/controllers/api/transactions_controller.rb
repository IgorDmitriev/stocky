class Api::TransactionsController < ApplicationController

  def index

  end

  def new
    
  end

  private

  def transaction_params
    params.require(:transaction).permit(:user_id, :company_id,
                                        :price, :stock_count)
  end
end
