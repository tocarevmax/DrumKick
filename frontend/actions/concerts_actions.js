import * as APIUtil from '../util/concerts_api_util';

export const RECEIVE_CONCERT = 'RECEIVE_CONCERT';
export const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS';

export const receiveConcert = concert => ({
  type: RECEIVE_CONCERT,
  concert
});

export const receiveConcerts = concerts => ({
  type: RECEIVE_CONCERTS,
  concerts
});

export const fetchConcert = id => dispatch => (
  APIUtil.fetchConcert(id)
    .then(
      concert => ( dispatch(receiveConcert(concert)) )
    )
);

export const fetchConcerts = () => dispatch => (
  APIUtil.fetchConcerts()
    .then(
      (concerts) => ( dispatch(receiveConcerts(concerts)) )
    )
);
