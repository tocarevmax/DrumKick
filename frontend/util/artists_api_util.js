export const fetchArtist = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}`
  })
);
