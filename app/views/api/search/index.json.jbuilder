json.set! :artists do
  json.array! @artists, :id, :name, :image_url, :upcoming_events
end

json.set! :concerts do
  json.array! @concerts, :id, :name, :local_date, :venue_name, :venue_address
end
#
# json.set! :artists do
#   @artists.each do |artist|
#     json.set! artist.id do
#       json.extract! artist, :id, :name, :image_url, :upcoming_events
#     end
#   end
# end
#
# json.set! :concerts do
#   @concerts.each do |concert|
#     json.set! concert.id do
#       json.extract! concert, :id, :name, :local_date, :venue_name, :venue_address
#     end
#   end
# end


# @artists.each do |artist|
#   json.extract! artist, :name
# end
#
# @concerts.each do |concert|
#   json.extract! concert, :name
# end
