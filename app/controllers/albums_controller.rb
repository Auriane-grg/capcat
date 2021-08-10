class AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)
    @album.save
    redirect_to album_path(@album)
  end

  def show
    @album = Album.find(params[:id])
  end

  def index
    @albums = Album.all
  end

  def edit
    @album = Album.find(params[:id])
  end


  def update
    @album = Album.find(params[:id])
    @album = Album.update(album_params)
    redirect_to album_path(@album)
  end


  private

  def album_params
    params.require(:album).permit(:name, :pochette, :date, :description, :deezer, :spotify, :youtube, :amuse)
  end

end
