class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.date :date
      t.string :description
      t.string :deezer
      t.string :spotify
      t.string :youtube
      t.string :amuse

      t.timestamps
    end
  end
end
