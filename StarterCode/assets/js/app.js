// @TODO: YOUR CODE HERE!
// Setting the variables 
var xaxis= poverty
var yaxis= healthcare

// Updating the X scale and Variable
var xScale = d3.scaleBand()
  .domain(var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, svgHeight]);)
 

  //Updating the Y scale and Variable
  var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, svgHeight]);

  // Updating Axis functions 
  var bottomAxis = d3.axisbottom(xLinearScale)
  var leftAxis = d3.axisleft(ylinearScale)

  // Append Axes to Charts 
  var chartGroup = svg.append("g")
  .attr("transform", `translate(${svgHeight}, ${margin.top})`);
  .call(bottomAxis)

  var chartGroup = svg.append("g")
  .call(leftAxis)
  
// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};
// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  // Load data from data.csv
d3.csv("data.csv").then(function(data) {
   // Format the data as numbers
   stateData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
  });
  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);
}).catch(function(error) {
  console.log(error);
});
