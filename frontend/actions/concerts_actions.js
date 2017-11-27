import * as APIUtil from '../util/concerts_api_util';

export const RECEIVE_CONCERT = 'RECEIVE_CONCERT';

export const receiveConcert = concert => ({
  type: RECEIVE_CONCERT,
  concert
});

export const fetchConcert = id => dispatch => (
  APIUtil.fetchConcert(id)
    .then(
      concert => ( dispatch(receiveConcert(concert)) )
    )
);
