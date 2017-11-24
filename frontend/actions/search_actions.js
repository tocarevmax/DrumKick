import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = result => ({
  type: RECEIVE_SEARCH_RESULTS,
  result
});

export const fetchSearchResults = name => dispatch => (
  APIUtil.fetchSearchResults(name)
    .then(
      result => ( dispatch(receiveSearchResults(result)) )
    )
);
