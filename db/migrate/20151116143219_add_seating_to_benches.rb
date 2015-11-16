class AddSeatingToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :integer, default: 3
  end
end
