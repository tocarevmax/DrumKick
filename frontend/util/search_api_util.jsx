export const fetchSearchResults = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/search?name=${name}`
  })
);
