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

  has_many :concerts

  def self.update_upcoming_events
    Artist.all.each do |artist|
      p artist.name
      p "current upcoming_events: #{artist.upcoming_events}"
      upc_ev = artist.concerts.count
      p "need to update to this upcoming_events: #{upc_ev}"
      artist.update_attributes(upcoming_events: upc_ev)
    end
    nil
  end

  def self.check_upcoming_events
    Artist.all.each do |artist|
      p artist.upcoming_events == artist.concerts.count
    end
    nil
  end
end
