// Note: Functions reference global DATA var from data.js

// Helper functions
function getCheckboxStatuses() {
    return {
        A: d3.select("#A").property("checked"),
        B: d3.select("#B").property("checked"),
        C: d3.select("#C").property("checked")
    };
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function getColor(category) {
    var statuses = getCheckboxStatuses();

    if (statuses[category]) {
        return CATEGORIES[category].color;
    }
    else {
        return "gray"
    }
}

// Populate table
function fillTable() {

    d3.select("tbody").html("");

    var statuses = getCheckboxStatuses();

    DATA.forEach(obj => {

        // Add row only if category checkbox checked
        if (statuses[obj.category]) {

            var row = d3.select("tbody").append("tr");

            Object.values(obj).forEach(item => {
                row.append("td").text(item);
            });
        }
    });
};

// Always plots all data, but if checkbox unselected, grays out the data
function plotData() {
    var dataForPlot = [];

    var categories = DATA.map(d => d.category);
    var unique = categories.filter(onlyUnique);

    unique.forEach(category => {

        var filteredData = DATA.filter(d => d.category == category);

        var trace = {x: filteredData.map(d => d.x),
                     y: filteredData.map(d => d.y),
                     mode: "markers",
                     type: "scatter",
                     marker:
                        {color: getColor(category),
                         size: 9},
                     name: category};

        dataForPlot.push(trace);
    });

    var layout = {title: "Our plot",
                  xaxis: {title: "x", range: [0, 15]},
                  yaxis: {title: "y", range: [12, 38]}};

    Plotly.newPlot("plot", dataForPlot, layout);
}

function refresh() {
    fillTable();
    plotData();
}

d3.select("#A").on("change", refresh);
d3.select("#B").on("change", refresh);
d3.select("#C").on("change", refresh);

refresh();
