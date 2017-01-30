class Api::CompaniesController < ApplicationController
  def index
    @companies = Company.all
  end

  def create
    @company = Company.new(company_params)

    if @company.save
      render :show
    else
      render json: @company.errors.full_messages
    end
  end

  def show
    @company = Company.find(params[:id])
  end

  def destroy
    @company = Company.find(params[:id])
    @company.destroy
    render :show
  end

  private
  def company_params
    params.require(:company).permit(:name, :price)
  end
end
