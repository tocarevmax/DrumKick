
D9D3

demo user

Artist.where.not(:id => User.first.trackings.select(:artist_id).uniq)

------


<div className="navigation"> should be its own component
container for it
mapDispatchToProps
  fetchSearchResults
  changeUISearch   - regular action,
            type: SET_SEARCH_PAGE
            action: {searchPage: true/false}


mapStateToProps
  ui


  nav search input needs update on change with update local state & fetchSearchResults

  if this.state.empty?
    dispatch ui action
          search_page: true/false?


--

in search component
  change uisearch back to false

  changeUISear

  <SearchResultItem onClick={}>



changeUISearch({searchPage: true})
dispatch(changeUISearch({searchPage: false}))

---------------------


search with geo-distance
Concert.within(100, :origin => [37.792,-122.393])

search by date:
Concert.all.where('"date_time" > ?', Date.today)
Concert.all.where('"date_time" > ?', Date.parse('26-06-2018'))

Date.parse('01-05-2018')

search by name:
Artist.where('lower(name) ~ ?', "U2".downcase)

Concert.where('lower(name) ~ ?', "ar".downcase).limit(5)


Artist.find(4).upcoming_events == Artist.find(4).concerts.count

--

Tracking.create(user_id: 1, artist_id: 3)
Tracking.create(user_id: 1, artist_id: 4)
Tracking.create(user_id: 1, artist_id: 5)

Tracking.create(user_id: 2, artist_id: 3)
Tracking.create(user_id: 2, artist_id: 4)
Tracking.create(user_id: 2, artist_id: 5)
