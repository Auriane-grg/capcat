class AlbumsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  # include Pundit
  # after_action :verify_authorized, except: :index, unless: :skip_pundit?
	# after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?


  def new
    @album = Album.new
    authorize @album
  end

  def create
    @album = Album.new(album_params)
    @album.save
    redirect_to album_path(@album)
  end

  def show
    @album = Album.find(params[:id])
    authorize @album
  end

  def index
    # @albums = Album.all
    @albums = policy_scope(Album)
  end

  def edit
    @album = Album.find(params[:id])
    authorize @album
  end


  def update
    @album = Album.find(params[:id])
    authorize @album
    @album.update(album_params)
    redirect_to album_path(@album)
  end


  private

  def album_params
    params.require(:album).permit(:name, :date, :description, :deezer, :spotify, :youtube, :amuse, :player, :pochette, images:[], videos:[])
  end
	

end
