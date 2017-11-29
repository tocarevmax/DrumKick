Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :dashboard, only: [:index]
    resources :artists, only: [:index, :create, :show]
    resources :concerts, only: [:index, :create, :show]
    resources :trackings, only: [:index, :show, :create, :destroy]
    resources :search, only: [:index]
  end
end
