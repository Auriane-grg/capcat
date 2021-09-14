class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  
  include Pundit

  after_action :verify_authorized, except: :index, unless: :skip_pundit?
  after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

  private
  
  def skip_pundit? #=> si on est dans un controller de device, on ne met pas un pundit / si on est sur le controller de pages
		devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
	end

end
