const colors = {
    'A': 'red',
    'B': 'orange'
};

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
    var plotData = [];

    var categories = data.map(d => d.category);
    var unique = categories.filter(onlyUnique);

    unique.forEach(category => {

        var filteredData = data.filter(d => d.category == category);

        var trace = {x: filteredData.map(d => d.x),
                     y: filteredData.map(d => d.y),
                     mode: "markers",
                     type: "scatter",
                     color: colors[category],
                     name: category};

        plotData.push(trace);
    });

    var layout = {title: "Our plot"};

    Plotly.newPlot("plot", plotData, layout);
}


// Init
fillTable(data);
plotData(data);
