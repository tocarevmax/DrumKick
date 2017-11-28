@trackings.each do |tracking|
  json.set! tracking.artist_id do
    json.(tracking, :id, :user_id, :artist_id)
  end
end
