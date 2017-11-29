json.set! :concerts do
  json.array! @concerts do |concert|
      json.(concert, :id, :artist_id, :name, :tm_url,
      :date_time, :local_date, :local_time, :timezone, :image_url, :venue_name, :venue_address,
      :price_range )

      json.artist concert.artist, :id, :name
  end
end

json.set! :artists_on_tour do
  json.array! @artists_on_tour, :id, :name
end

json.set! :artists_not_on_tour do
  json.array! @artists_not_on_tour, :id, :name
end
