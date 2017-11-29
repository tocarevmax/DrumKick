export const fetchDashboard = () => (
  $.ajax({
    method: 'GET',
    url: '/api/dashboard'
  })
);
