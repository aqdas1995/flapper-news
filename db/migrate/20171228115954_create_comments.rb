class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :upvote, default: 0
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
