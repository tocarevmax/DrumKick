json.set! :artists do
  json.array! @artists, :id, :name, :image_url, :upcoming_events
end

json.set! :concerts do
  json.array! @concerts, :id, :name, :image_url, :local_date, :venue_name, :venue_address
end
