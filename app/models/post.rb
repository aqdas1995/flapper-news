class Post < ApplicationRecord
    has_many :comments

    def as_json(option = {})
        super(option.merge(include: :comments))
    end
end
