//data preparation
var chartData = {
  chartlibrary: 'canvasjs',
  width: null,
  height: 300,
  zoomEnabled: false,
  backgroundColor: "",
  theme: "theme1",                //theme1, theme2, theme3
  colorSet: "colorSet1",          //colorSet1, colorSet2, colorSet3

  title: {
    text: "IRAS - Graphic Chart",
    padding: 0,
    verticalAlign: "top",         //top, center, bottom
    horizontalAlign: "center",    //left, center, right
    fontSize: 20,                 //in pixels
    fontFamily: "Calibri",        //“arial” , “tahoma”, “verdana”, etc
    fontWeight: "normal",         //normal, bold, bolder, lighter,
    fontColor: "black",
    fontStyle: "normal",          //normal, italic, oblique
    borderThickness: 0,
    borderColor: "black",
    cornerRadius: 20,
    backgroundColor: null,
    margin: 5
  },

  Legend: {
    name: null,
    verticalAlign: "center",
    horizontalAlign: "right",
    fontSize: 14,//in pixels
    fontFamily: "calibri",
    fontWeight: "normal",         //normal, bold, bolder, lighter,
    fontColor: "black",
    fontStyle: "normal",          // normal, italic, oblique
    cursor: null,
    itemmouseover: null,
    itemmouseout: null,
    itemmousemove: null,
    itemclick: null
  },

  ToolTip: {
    enabled: true,
    borderColor: null,
    shared: false,
    animationEnabled: true,
    content: null
  },

  Axis: {
    minimum: null, //Minimum value to be shown on the Axis
    maximum: null, //Minimum value to be shown on the Axis
    interval: null, // Interval for tick marks and grid lines
    intervalType: null, //number, millisecond, second, minute, hour, day, month, year
    title: null, // string
    titleFontColor: "black",
    titleFontSize: 20,
    titleFontFamily: "arial",
    titleFontWeight: "normal",
    titleFontStyle: "normal",
    labelAngle: 0,
    labelFontFamily: "arial",
    labelFontColor: "black",
    labelFontSize: 12,
    labelFontWeight: "normal",
    labelFontStyle: "normal",
    labelAutoFit: false,
    labelWrap: true,
    labelMaxWidth: null,//null for auto
    prefix: "",
    suffix: "",
    includeZero: true, //Applies only for axisY. Ignored in axisX.
    tickLength: 5,
    tickColor: "black",
    tickThickness: 1,
    lineColor: "black",
    lineThickness: 1,
    gridColor: "A0A0A0",
    gridThickness: 0,
    interlacedColor: null,
    valueFormatString: null,
    margin: 2,
    stripLines: [] // Just a placeholder. Does not have any effect on the actual number of striplines
  },

  StripLine: {
    value: null,
    startValue: null,
    endValue: null,
    color: "orange",
    thickness: 2,
    label: "",
    labelBackgroundColor: "#EEEEEE",
    labelFontFamily: "arial",
    labelFontColor: "orange",
    labelFontSize: 12,
    labelFontWeight: "normal",
    labelFontStyle: "normal"
  },

  //data below should be an array
  data: [             
    {       
      type: "bar",
      dataPoints: [
        { label: 'Jan', y: 155 },
        { label: 'Feb', y: 150 },
        { label: 'Mar', y: 160 },
        { label: 'Apr', y: 171 },
        { label: 'May', y: 195 },
        { label: 'Jun', y: 168 },
        { label: 'Jul', y: 128 },
        { label: 'Aug', y: 114 },
        { label: 'Sep', y: 180 },
        { label: 'Oct', y: 160 },
        { label: 'Nov', y: 116 },
        { label: 'Dec', y: 145 }
      ]
    },

    {       
      type: "bar",
      dataPoints: [
        { label: 'Jan', y: 135 },
        { label: 'Feb', y: 150 },
        { label: 'Mar', y: 130 },
        { label: 'Apr', y: 151 },
        { label: 'May', y: 175 },
        { label: 'Jun', y: 168 },
        { label: 'Jul', y: 138 },
        { label: 'Aug', y: 104 },
        { label: 'Sep', y: 160 },
        { label: 'Oct', y: 190 },
        { label: 'Nov', y: 136 },
        { label: 'Dec', y: 115 }
      ]
    }
  ],
};