export const fetchConcertsFromTMbyAttractionId = (attractionId) => {
  return $.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${encodeURI(attractionId)}&apikey=4QLYvPV1gpArAyanl8lWyRvtESjU9XY8`,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};

// fetchConcertsFromTMbyAttractionId("K8vZ917GC17");
