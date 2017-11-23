
export const fetchFromTMbyArtistName = (artistName) => {
  return $.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${encodeURI(artistName)}&apikey=4QLYvPV1gpArAyanl8lWyRvtESjU9XY8`,
    async:true,
    dataType: "json",
  });
};

const createArtist = (artist) => {
  return $.ajax({
    url: '/api/artists',
    method: 'POST',
    data: {artist}
  });
};

export const findImageWidth640 = (imagesArray) => {
  for (var i = 0; i < imagesArray.length; i++) {
    if (Number(imagesArray[i].width) === 640) {
      return imagesArray[i].url;
    }
  }
};

const pluckRelevantFieldsFromFetchedArtist = (res) => {
  console.log(res);
  // console.log(res._embedded.attractions[0]);
  const artist = res._embedded.attractions[0];
  let name;
  let tm_id;
  let image_url;
  let tm_url;
  let upcoming_events;
  if (artist) {
    name = artist.name;
    tm_id = artist.id;
    image_url = findImageWidth640(artist.images);
    tm_url = artist.url;
    upcoming_events = artist.upcomingEvents._total;

    if (name &&
      tm_id &&
      image_url &&
      tm_url &&
      (upcoming_events >= 0)) {
        const result = {name, tm_id, image_url, tm_url, upcoming_events};
        // console.log(result);
        return result;
      }
  }
};

const artistsOfChoice = [
  'Coldplay',
  'Rihanna',
  'U2',
  'Eminem',
  'Maroon 5',
  'Adele',
  'Drake',
  'Kanye West',
  'Bruno Mars',
  'Katy Perry',
  'Beyoncé',
  'Red Hot Chili Peppers',
  'Lady Gaga',
  'Kings of Leon',
  'Lil Wayne',
  'Chris Brown',
  'The Killers',
  'Calvin Harris',
  'Ed Sheeran',
  'Radiohead',
  'David Guetta',
  'Justin Timberlake',
  'Taylor Swift',
  'Justin Bieber',
  'Usher',
  'Mumford & Sons',
  'Muse',
  'Imagine Dragons',
  'Ellie Goulding',
  'Nicki Minaj',
  'Wiz Khalifa',
  'The Weeknd',
  'Black Eyed Peas',
  'Lana Del Rey',
  'Green Day',
  'Foo Fighters',
  'Kendrick Lamar',
  'Pitbull',
  'Linkin Park',
  'Flo Rida',
  'The Rolling Stones',
  'Arctic Monkeys',
  'Avicii',
  'OneRepublic',
  'The Black Keys',
  'Jason Derulo',
  'Metallica',
  'Fall Out Boy',
  'Alicia Keys',
  'Kid Cudi',
  'MGMT',
  'Paramore',
  'Britney Spears',
  'The xx',
  'Skrillex',
  'Foster the People',
  'Queen',
  'Daft Punk',
  'John Mayer',
  'John Legend',
  'Miley Cyrus',
  'Kesha',
  'Arcade Fire',
  'Gorillaz',
  'T.I.',
  'Macklemore & Ryan Lewis',
  'Shakira',
  'Jason Mraz',
  'Snoop Dogg',
  'Bon Iver',
  'Train',
  'Big Sean',
  'J. Cole',
  'Sia',
  'One Direction',
  'blink-182',
  'Lorde',
  'Pearl Jam',
  'Jack Johnson',
  'Elton John',
  'Nickelback',
  'Bob Dylan',
  'AC/DC',
  'The Cure',
  'Fleetwood Mac',
  'B.o.B',
  'Enrique Iglesias',
  'Trey Songz',
  'Bastille',
  'Weezer',
  'Ariana Grande',
  'A$AP Rocky',
  'The Fray',
  'Aerosmith',
  'The Lumineers',
  'The Strokes',
  'Death Cab for Cutie',
  'Jay-Z',
  'Kelly Clarkson',
  'Of Monsters and Men',
  'Madonna',
  'Ne-Yo',
  'Dr. Dre',
  'Vampire Weekend',
  'Panic! At the Disco',
  'Bon Jovi',
  'The Script',
  '50 Cent',
  'Avril Lavigne',
  'Major Lazer',
  'Two Door Cinema Club',
  'Demi Lovato',
  'Jennifer Lopez',
  'Phoenix',
  'Jessie J',
  'Mariah Carey',
  'Fun.',
  'Beck',
  'M83',
  'The Kooks',
  'Tyga',
  'Pharrell Williams',
  'Sam Smith',
  'Michael Bublé',
  'Frank Ocean',
  'Snow Patrol',
  'Deadmau5',
  'Christina Aguilera',
  'alt-J',
  'Passion Pit',
  'Gotye',
  'Nelly',
  'Florence and the Machine',
  'Akon',
  'OutKast',
  'Ludacris',
  'Journey',
  'Lady Antebellum',
  'Stevie Wonder',
  'Eric Clapton',
  'Lupe Fiasco',
  'Modest Mouse',
  'System of a Down',
  'Twenty One Pilots',
  'Bruce Springsteen',
  'Future',
  'Disclosure',
  'The Who',
  'Smashing Pumpkins',
  'Childish Gambino',
  'Mac Miller',
  'Depeche Mode',
  'Band of Horses',
  'M.I.A.',
  'Cage the Elephant',
  'The Goo Goo Dolls',
  'Zedd',
  'Billy Joel',
  'Hozier',
  'Franz Ferdinand',
  'The Offspring',
  'Pixies',
  '2 Chainz',
  'Selena Gomez',
  'Eagles',
  'DJ Khaled',
  'Yeah Yeah Yeahs',
  'Rick Ross',
  'Nas',
  'The Shins',
  'T-Pain',
  'The National',
  'Tiësto',
  'The Beach Boys',
  'Carly Rae Jepsen',
  'Swedish House Mafia',
  'Incubus',
  'R. Kelly',
  'Tame Impala',
  'Owl City',
  'Taio Cruz',
  'Evanescence',
  'Jeremih',
  'Robin Thicke',
  'Timbaland',
  'Iron & Wine',
  'Moby',
  'Passenger',
  'Pink',
  'Luke Bryan',
  'Carrie Underwood',
  'The All-American Rejects',
  'Santana',
  'The Temper Trap',
  'Dave Matthews Band',
  'Edward Sharpe & The Magnetic Zeros',
  'will.i.am',
  'Slipknot',
  'The Chainsmokers'


];

const shortList = [
  // 'Coldplay',
  // 'Rihanna',
  'U2',
  // 'Eminem',
  // 'Maroon 5',
  // 'Adele',
  // 'Drake',
  // 'Kanye West',
  // 'Bruno Mars',
  // 'Katy Perry'
];

const startFetchingArtistsFromList = () => {
  let resArr = [];
  for (var i = 0; i < shortList.length; i++) {
    fetchFromTMbyArtistName(shortList[i])
      .then((res) => {
        let plucked = pluckRelevantFieldsFromFetchedArtist(res);
        if (plucked) {
          resArr.push(plucked);
          console.log(resArr);
          createArtist(plucked);
        }
      });
  }
  // return resArr;
};



window.startFetchingArtistsFromList = startFetchingArtistsFromList;
