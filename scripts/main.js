// We pass into the Interface the name of the current Interface instance, 
// followed by an Array of the methods we are expecting to find
var toBeImplemented = ['renderChart'];
var chartInterface = new Interface('chartInterface', toBeImplemented);

// Create a Chart constructor that will implement the above properties/methods
function Chart(config) {
  // Pass in the methods we are expecting, 
  // followed by the name of the Interface instance that we're checking against
  //Interface.ensureImplements(config.renderChart, chartInterface);
 
  this.renderChart = config.renderChart;
}
 