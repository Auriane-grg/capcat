class InstagramsController < ApplicationController

  def new
    @instagram = Instagram.new
    authorize @instagram
  end

  def create
    @instagram = Instagram.new(instagram_params)
    @instagram.save
    redirect_to pages_path(@home)
  end

  def show
    @instagram = Instagram.find(params[:id])
    authorize @instagram
  end

  private

  def instagram_params
    params.require(:instagram).permit(:name, images:[], videos:[])
  end
  
end
