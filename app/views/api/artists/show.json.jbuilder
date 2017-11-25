# json.set! @artist.id do
  json.(@artist, :id, :name, :image_url, :upcoming_events)
  json.concerts @artist.concerts, :id, :name, :local_date, :venue_name, :venue_address
# end
