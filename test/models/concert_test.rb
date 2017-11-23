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

require 'test_helper'

class ConcertTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
