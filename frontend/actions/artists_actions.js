import * as APIUtil from '../util/artists_api_util';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtist = id => dispatch => (
  APIUtil.fetchArtist(id)
    .then(
      artist => ( dispatch(receiveArtist(artist)) )
    )
);
