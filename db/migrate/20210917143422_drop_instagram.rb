class DropInstagram < ActiveRecord::Migration[6.0]
  def change
    drop_table :instagrams do |t|
      t.timestamps null: false
    end
  end
end
