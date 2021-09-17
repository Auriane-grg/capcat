Rails.application.routes.draw do
  
  devise_for :users
  resources :albums
  resources :instagrams, only: [:new, :create]
  root to: 'pages#home'
  get 'pages/contact'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
