import {findImageWidth640} from './seeding_artists';

export const fetchConcertsFromTMbyAttractionId = (attractionId) => {
  return $.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${encodeURI(attractionId)}&size=100&countryCode=US&apikey=4QLYvPV1gpArAyanl8lWyRvtESjU9XY8`,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    // error: function(xhr, status, err) {
    //             // This time, we do not end up here!
    //          }
  });
};

const createConcert = (concert) => {
  return $.ajax({
    url: '/api/concerts',
    method: 'POST',
    data: {concert},
    success: (res) => {
                // console.log(res);
              },
    error: (res) => {
                debugger;
                // console.log(res);
            }
  });
};



const pluckRelevantFieldsFromFetchedConcerts = (res) => {
  if (!res._embedded) {
    return null;
  }

  const eventsArray = res._embedded.events;
  const resArray = [];
  let artist_id, tm_id, tm_attraction_id, name, tm_url, date_time,
      local_date, local_time, timezone, image_url, locale,
      venue_name, venue_lat, venue_long, venue_address, price_range;


  for (var i = 0; i < eventsArray.length; i++) {

    let currentEvent = eventsArray[i];

    if (!currentEvent._embedded ||
        !currentEvent._embedded.venues ||
        !currentEvent._embedded.venues[0]) {
      continue;
    }

    let venue = currentEvent._embedded.venues[0];

    if (!currentEvent._embedded.attractions ||
        !currentEvent._embedded.attractions[0] ||
        !currentEvent.dates ||
        !currentEvent.dates.start ||
        !currentEvent.images ||
        !venue.location ||
        !venue.address ||
        !venue.city ||
        !venue.state ||
        !venue.country ||
        !currentEvent.priceRanges ||
        !currentEvent.priceRanges[0]
    ) {
      continue;
    }

    console.log(i);
    console.log(currentEvent);


    artist_id = 1;
    tm_id = currentEvent.id;
    tm_attraction_id = currentEvent._embedded.attractions[0].id;
    name = currentEvent.name;
    tm_url = currentEvent.url;
    date_time = currentEvent.dates.start.dateTime;
    local_date = currentEvent.dates.start.localDate;
    local_time = currentEvent.dates.start.localTime;
    timezone = currentEvent.dates.timezone;
    image_url = findImageWidth640(currentEvent.images);
    locale = currentEvent.locale;
    venue_name = venue.name;
    venue_lat = venue.location.latitude;
    venue_long = venue.location.longitude;
    venue_address = `${venue.address.line1}, ${venue.city.name}, ${venue.state.stateCode} ${venue.postalCode}, ${venue.country.countryCode}`;
    price_range = `$${currentEvent.priceRanges[0].min} - $${currentEvent.priceRanges[0].max}`;

    if (artist_id && tm_id && tm_attraction_id && name && tm_url && date_time &&
        local_date && local_time && timezone && image_url && locale &&
        venue_name && venue_lat && venue_long && venue_address && price_range) {

      let concert = {
        artist_id, tm_id, tm_attraction_id, name, tm_url, date_time,
        local_date, local_time, timezone, image_url, locale,
        venue_name, venue_lat, venue_long, venue_address, price_range};

      // make post ajax request here
      let postReq = createConcert(concert);

      resArray.push(concert);
    }
  }
  console.log(resArray);
  return resArray;
};

const startFetchingConcerts = () => {
  fetchConcertsFromTMbyAttractionId("K8vZ91712W7")
    .then(pluckRelevantFieldsFromFetchedConcerts);
};

window.startFetchingConcerts = startFetchingConcerts;
