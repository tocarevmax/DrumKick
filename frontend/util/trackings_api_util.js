export const fetchTracking = (trackingId) => (
  $.ajax({
    method: 'GET',
    url: `/api/trackings/${trackingId}`
  })
);

export const createTracking = (artist_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/trackings',
    data: {tracking: {artist_id}}
  })
);

export const deleteTracking = (trackingId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/trackings/${trackingId}`
  })
);
