json.set! :artists do
  json.array! @artists, :id, :name, :image_url
end
