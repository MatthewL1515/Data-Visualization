// Variables

const majorsURL = "https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/college-majors/all-ages.csv"

let majorsTable
let selectedMajors = []

// ____________________________________________________________
// Preload Function

function preload() {
  majorsTable = loadTable(majorsURL, 'csv', 'header')
}
// ____________________________________________________________
// Setup Function

function setup() {
  createCanvas(600, 500);
  textSize(12)
  textAlign( CENTER,CENTER)
  noLoop()
  
}

// ____________________________________________________________
// Draw Function

function draw() {
  background(220);
  
  drawTitle()
  drawAxes()
}

// ____________________________________________________________
// All Other Functions Go Below
// ____________________________________________________________

// ____________________________________________________________
// Title Function

function drawTitle() {
  textSize(18)
  text("Employment Rate by Major", width/2, 30)
}
// ____________________________________________________________
// Axes Lines

function drawAxes() {
  stroke(0)
  
  // X-axis line
  line(50, 350, width - 50, 350)
  
  // Y Axis Line
  line(50, 350, 50, 50)
}
// ____________________________________________________________
