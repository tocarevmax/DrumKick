# == Schema Information
#
# Table name: artists
#
#  id              :integer          not null, primary key
#  tm_id           :string           not null
#  name            :string           not null
#  image_url       :string           not null
#  tm_url          :string           not null
#  upcoming_events :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Artist < ApplicationRecord
  validates :tm_id, :name, :image_url, :tm_url, :upcoming_events, presence: true
  validates :tm_id, :name, uniqueness: true

  # has_many :concerts
end
