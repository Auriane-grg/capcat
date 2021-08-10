Rails.application.routes.draw do
  
  resources :albums

  root to: 'pages#home'
  get 'pages/contact'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
