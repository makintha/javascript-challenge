var currFilter = {}

// Filter data function
function filterData() {
    var currchange = d3.select(this)
    var filterName = currchange.attr("id")
    var filterValue = currchange.property("value")
    if (filterValue) {
        currFilter[filterName] = filterValue
    } else {
        delete currFilter[filterName]
    } 
    var filteredData = data
    Object.entries(currFilter).forEach(([key, value]) => {
        filteredData = filteredData.filter(x => x[key] == value)
    })
    tablebuilder(filteredData)
}

// Table builder function
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

// Main code
tablebuilder(data)
d3.selectAll("input").on("change", filterData)