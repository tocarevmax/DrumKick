export const fetchUserConcerts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/dashboard'
  })
);
