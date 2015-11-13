//Funcion Barras 3D
$(function () {
    // Set up the chart
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container-column',
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Chart rotation demo'
        },
        subtitle: {
            text: 'Test options by dragging the sliders below'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    function showValues() {
        $('#R0-value').html(chart.options.chart.options3d.alpha);
        $('#R1-value').html(chart.options.chart.options3d.beta);
    }

    // Activate the sliders
    $('#R0').on('change', function () {
        chart.options.chart.options3d.alpha = this.value;
        showValues();
        chart.redraw(false);
    });
    $('#R1').on('change', function () {
        chart.options.chart.options3d.beta = this.value;
        showValues();
        chart.redraw(false);
    });

    showValues();
});

//Funcion Torta 3D
$(function () {
    $('#container-pie').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    });
});
//Funcion Monitoreo de Temperatura
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Tokyo',
            marker: {
                symbol: 'square'
            },
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                y: 26.5,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                }
            }, 23.3, 18.3, 13.9, 9.6]

        }, {
            name: 'London',
            marker: {
                symbol: 'diamond'
            },
            data: [{
                y: 3.9,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                }
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});