// Function to create table

function tablebuilder(tabledata) {
    var tbody = d3.select("tbody")
    tbody.text("")
    tabledata.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

// Select the button

tablebuilder(data)

var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
// Listen to the activity
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property("value");
    
    var filteredData = data
    if (inputDate) {
        filteredData = filteredData.filter(sight => sight.datetime === inputDate)
    }

    tablebuilder(filteredData)
}