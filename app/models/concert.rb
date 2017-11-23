# == Schema Information
#
# Table name: concerts
#
#  id               :integer          not null, primary key
#  artist_id        :integer          not null
#  tm_id            :string           not null
#  tm_attraction_id :string           not null
#  name             :string           not null
#  tm_url           :string           not null
#  date_time        :string           not null
#  local_date       :string           not null
#  local_time       :string           not null
#  timezone         :string           not null
#  image_url        :string           not null
#  locale           :string           not null
#  venue_name       :string           not null
#  venue_lat        :string           not null
#  venue_long       :string           not null
#  venue_address    :string           not null
#  price_range      :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Concert < ApplicationRecord
  validates :artist_id, :tm_id, :tm_attraction_id, :name, :tm_url,
    :date_time, :local_date, :local_time, :timezone, :image_url,
    :locale, :venue_name, :venue_lat, :venue_long, :venue_address,
    :price_range, presence: true

  validates :tm_id, uniqueness: true

  # belongs_to :artist
end
