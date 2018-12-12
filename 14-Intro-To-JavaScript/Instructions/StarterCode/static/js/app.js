// from data.js
var tableData = data;

// YOUR CODE HERE!
var row = {
  datetime: "1/6/2010",
  city: "san diego",
  state: "ca",
  country: "us",
  shape: "light",
  durationMinutes: "20 minutes",
  comments: "Unusual silent&#44 orange glowing light stopping changing direction and discharging sudstance."
}

function filtertable () {
d3.event.preventDefault();

var tbody = d3.select("tbody")

tableData.forEach(row => {
  tr = tbody.append('tr')

  td = tr.append('td').text(row.datetime)
  td = tr.append('td').text(row.city)
  td = tr.append('td').text(row.state)
  td = tr.append('td').text(row.country)
  td = tr.append('td').text(row.shape)
  td = tr.append('td').text(row.durationMinutes)
  td = tr.append('td').text(row.comments)

})}


d3.select('#filter-btn').on('click', filtertable)


