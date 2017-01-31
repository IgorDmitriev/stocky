Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    post '/login', to: 'users#login'
    get '/logout', to: 'users#logout'
    resources :companies, only: [:index, :create, :show, :destroy]
    # resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:index, :create, :destroy, :show]
    resources :transactions
  end
end
