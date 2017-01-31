class Api::UsersController < ApplicationController
  def login
    @user = User.find_for_facebook_auth(auth_params)

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def logout
  end

  def auth_params
    params.require(:fbAuth).permit(:userID, :accessToken)
  end

end
