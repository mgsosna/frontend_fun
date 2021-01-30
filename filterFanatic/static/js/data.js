const CATEGORIES = {
    A: {
        x_mean: 0,
        y_mean: 10,
        color: 'red'
        },
    B: {
        x_mean: 5,
        y_mean: 30,
        color: 'orange'
       },
    C: {
        x_mean: 10,
        y_mean: 20,
        color: 'blue'
       }
};

const N_SAMPLES = 50;

var data = [];

// Generate data
Object.entries(CATEGORIES).forEach(obj => {

    for (var i = 0; i < N_SAMPLES; i++) {

        var sample = {
            category: obj[0],
            x: (obj[1].x_mean + 2 * Math.random()).toFixed(2),
            y: (obj[1].y_mean + 4 * Math.random()).toFixed(2)
        };

        data.push(sample);
    }

});
