json.(@artist, :id, :name, :image_url, :upcoming_events)

json.localConcerts @local_concerts, :id, :name, :local_date, :venue_name, :venue_address

json.concerts @artist_concerts, :id, :name, :local_date, :venue_name, :venue_address
