import * as APIUtil from '../util/trackings_api_util';

export const RECEIVE_TRACKING = 'RECEIVE_TRACKING';
export const DELETE_TRACKING = 'DELETE_TRACKING';

export const receiveTracking = tracking => ({
  type: RECEIVE_TRACKING,
  tracking
});

export const removeTracking = trackingId => ({
  type: DELETE_TRACKING,
  trackingId
});

export const fetchTracking = (id) => dispatch => (
  APIUtil.fetchTracking(id)
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

export const deleteTracking = (id) => dispatch => (
  APIUtil.deleteTracking(id)
    .then(
      tracking => ( dispatch(removeTracking(tracking.id)) )
    )
);
