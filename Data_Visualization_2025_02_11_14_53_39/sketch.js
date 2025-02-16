// Variables
const majorURL = "https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/college-majors/all-ages.csv"

let majorsTable


// ____________________________________________________________

function preload() {
  majorsTable = loadTable(majorsURL, 'csv', 'header')
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
}

// ____________________________________________________________
// All Other Functions Go Below
// ____________________________________________________________

