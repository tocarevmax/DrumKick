
<!-- finalize concerts ajax -->
<!-- build artists model & controller -->
<!-- build concerts model & controller
test seeding to actual db
start playing with search -->
---------------------

Search container and search component


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
