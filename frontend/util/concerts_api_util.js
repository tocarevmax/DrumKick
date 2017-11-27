export const fetchConcert = (concertId) => (
  $.ajax({
    method: 'GET',
    url: `/api/concerts/${concertId}`
  })
);
