import * as APIUtil from '../util/trackings_api_util';

export const RECEIVE_TRACKINGS = 'RECEIVE_TRACKINGS';
export const RECEIVE_TRACKING = 'RECEIVE_TRACKING';
export const DELETE_TRACKING = 'DELETE_TRACKING';

export const receiveTrackings = trackings => ({
  type: RECEIVE_TRACKINGS,
  trackings
});

export const receiveTracking = tracking => ({
  type: RECEIVE_TRACKING,
  tracking
});

export const removeTracking = artistId => ({
  type: DELETE_TRACKING,
  artistId
});

export const fetchAllTrackings =  () => dispatch => (
  APIUtil.fetchAllTrackings()
    .then(
      trackings => ( dispatch(receiveTrackings(trackings)) )
    )
);

export const fetchTracking = (artistId) => dispatch => (
  APIUtil.fetchTracking(artistId)
    .then(
      tracking => ( dispatch(receiveTracking(tracking)) )
    )
);

export const createTracking = (artistId) => dispatch => (
  APIUtil.createTracking(artistId)
    .then(
      tracking => ( dispatch(receiveTracking(tracking)) )
    )
);

export const deleteTracking = (artistId) => dispatch => (
  APIUtil.deleteTracking(artistId)
    .then(
      tracking => ( dispatch(removeTracking(tracking.artist_id)) )
    )
);
