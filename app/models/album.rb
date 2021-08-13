class Album < ApplicationRecord
  has_one_attached :pochette
  has_many_attached :images
  has_many_attached :videos
end
