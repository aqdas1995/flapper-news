class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to? :json

  def angular
    render 'layouts/application'
  end

end
