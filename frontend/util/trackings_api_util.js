export const fetchAllTrackings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/trackings/'
  })
);

export const fetchTracking = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/trackings/${artistId}`,
  })
);

export const createTracking = (artist_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/trackings',
    data: {tracking: {artist_id}},
    error: (res)=>{console.log(res);}
  })
);

export const deleteTracking = (artistId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/trackings/${artistId}`,
    error: (res)=>{console.log(res);}
  
  })
);
