export const fetchConcert = (concertId) => (
  $.ajax({
    method: 'GET',
    url: `/api/concerts/${concertId}`
  })
);

export const fetchConcerts = () => (
  $.ajax({
    method: 'GET',
    url: `/api/concerts`
  })
);
