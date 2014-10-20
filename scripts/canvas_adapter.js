var canvasjs = (function (chartLocationId) {
   //chart rendering
    var renderChart = function (chartLocationId) {
        var dta = chartData;

        var inputData = dta.data;
        for(var i = 0; i < inputData.length; i++) {
          if (!inputData[i].type) inputData[i].type = 'bar'; //will default to bar chart
        }

        var chart = new CanvasJS.Chart(chartLocationId, {
            width: dta.width,
            height: dta.height,
            theme:  dta.theme,
            title: dta.title,
            backgroundColor: dta.backgroundColor,
            colorSet: dta.colorSet,
            data: inputData,
            Legend: dta.Legend,
            ToolTip: dta.ToolTip,
            StripLine: dta.StripLine,
            Axis: dta.Axis,
        });
        
        chart.render();
    };

    return {
        renderChart: renderChart
    };

} ()); 
