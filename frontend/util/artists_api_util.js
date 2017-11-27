export const fetchArtist = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}`
  })
);

export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/`
  })
);
