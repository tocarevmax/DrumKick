json.(@concert, :id, :artist_id, :name, :tm_url,
:date_time, :local_date, :local_time, :timezone, :image_url, :venue_name, :venue_address,
:price_range )

json.artist @concert.artist, :id, :name, :image_url, :upcoming_events
