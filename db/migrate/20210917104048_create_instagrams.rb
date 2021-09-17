class CreateInstagrams < ActiveRecord::Migration[6.0]
  def change
    create_table :instagrams do |t|

      t.timestamps
    end
  end
end
