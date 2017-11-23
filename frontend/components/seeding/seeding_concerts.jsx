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



const pluckRelevantFieldsFromFetchedConcerts = (res) => {
  const eventsArray = res._embedded.events;
  const resArray = [];
  let tm_id, name, tm_url, date_time, local_date, local_time, timezone,
      image_url, locale, venue_name, venue_address, price_range, tm_attraction_id;


  for (var i = 0; i < eventsArray.length; i++) {

    console.log(i);
    console.log(currentEvent);
    let currentEvent = eventsArray[i];
    let venue = currentEvent._embedded.venues[0];

    tm_id = currentEvent.id;
    // tm_attraction_id =
    name = currentEvent.name;
    tm_url = currentEvent.url;
    date_time = currentEvent.dates.start.dateTime;
    local_date = currentEvent.dates.start.localDate;
    local_time = currentEvent.dates.start.localTime;
    timezone = currentEvent.dates.timezone;
    image_url = findImageWidth640(currentEvent.images);
    locale = currentEvent.locale;
    venue_name = venue.name;
    venue_address = `${venue.address.line1}, ${venue.city.name}, ${venue.state.stateCode} ${venue.postalCode}, ${venue.country.countryCode}`;
    price_range = `$${currentEvent.priceRanges[0].min} - $${currentEvent.priceRanges[0].max}`;

    if (tm_id && name && tm_url && date_time && local_date &&
        local_time && timezone && image_url && locale &&
        venue_name && venue_address && price_range) {

      resArray.push({tm_id, tm_attraction_id, name, tm_url, date_time, local_date,
                    local_time, timezone, image_url, locale,
                    venue_name, venue_address, price_range});
    }
  }

  console.log(resArray);
  return resArray;
};

// fetchConcertsFromTMbyAttractionId("K8vZ917GC17")
//   .then(pluckRelevantFieldsFromFetchedConcerts);
