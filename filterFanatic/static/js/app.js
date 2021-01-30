function fillTable(data) {

    data.forEach(obj => {
        var row = d3.select("tbody").append("tr");

        Object.values(obj).forEach(item => {
            row.append("td").text(item);
        });
    });
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function plotData(data) {
    var dataForPlot = [];

    var categories = data.map(d => d.category);
    var unique = categories.filter(onlyUnique);

    unique.forEach(category => {

        var filteredData = data.filter(d => d.category == category);
        var color = CATEGORIES[category].color;

        var trace = {x: filteredData.map(d => d.x),
                     y: filteredData.map(d => d.y),
                     mode: "markers",
                     type: "scatter",
                     marker:
                        {color: color},
                     name: category};

        dataForPlot.push(trace);
    });

    var layout = {title: "Our plot"};

    Plotly.newPlot("plot", dataForPlot, layout);
}


// Init
fillTable(data);
plotData(data);

d3.select("#input").on("change", function() {
    console.log(this.value);
})
