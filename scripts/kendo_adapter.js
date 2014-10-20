var kendo = (function (chartLocationId) {
          function renderChart(chartLocationId) {
             var kdta = chartData;
             legend = kdta.Legend;
             legend.visible = false;

            $("#"+chartLocationId).kendoChart({
                title: kdta.title,
                
                legend: legend,
                seriesDefaults: {
                    type: "bar"
                },
                series: [
                {
                    name: "Total Visits",
                    type: "line",
                    data: [155, 150, 160, 171, 195, 168, 128, 114, 180, 160, 116, 145]
                }, 
                {
                    name: "Unique visitors",
                    data: [135, 150, 130, 151, 175, 168, 138, 104, 160, 190, 136, 115]
                }],
                valueAxis: {
                    max: 200,
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    majorGridLines: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            });
        };

        return {
          renderChart: renderChart
        };

} ()); 
