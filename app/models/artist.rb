class Artist < ApplicationRecord
  validates :tm_id, :name, :image_url, :tm_url, :upcoming_events, presence: true
  validates :tm_id, :name, uniqueness: true
end
