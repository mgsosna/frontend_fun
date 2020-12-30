// Create placeholder data for row
var placeholder = {
    name: "Unknown",
    age: "Who knows...",
    occupation: "???"
};

// Instantiate location in data
var index = 0;

function addRow(){

    // Add data from our array if available
    if (index < data.length) {
        console.log(`Adding ${data[index].name} to table`);
        var person = data[index];
    }
    else {
        console.log("Adding placeholder to table");
        var person = placeholder;
    }

    // Add data to table
    var row = d3.select("tbody").append("tr");
    Object.values(person).forEach(value => {
        row.append("td").text(value);
    });

    // Update index
    index ++ ;

}

d3.select("#button").on("click", addRow);
