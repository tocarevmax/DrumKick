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

require 'test_helper'

class ArtistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
