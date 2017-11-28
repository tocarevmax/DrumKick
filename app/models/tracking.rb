# == Schema Information
#
# Table name: trackings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tracking < ApplicationRecord
  validates :user_id, :artist_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:artist_id]

  belongs_to :user
  belongs_to :artist
end
