// ____________________________________________________________
// Variables
// ____________________________________________________________

const majorsURL = "https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/college-majors/all-ages.csv"

let majorsTable
let selectedMajors = []

// ____________________________________________________________
// ____________________________________________________________
// Preload Function
// ____________________________________________________________

function preload() {
  majorsTable = loadTable(majorsURL, 'csv', 'header')
}
// ____________________________________________________________
// ____________________________________________________________
// Setup Function
// ____________________________________________________________

function setup() {
  createCanvas(600, 400);
  textSize(12)
  textAlign( CENTER,CENTER)
  noLoop()
  
}

// ____________________________________________________________
// ____________________________________________________________
// Draw Function
// ____________________________________________________________

function draw() {
  background(220);
  
  let barWidth = width/ (selectedMajors.length * 2)
  
  let maxRate = 0
  for (let i = 0; i < selectedMajors.length; i++) {
    if (selectedMajors[i].
  }
}

// ____________________________________________________________
// All Other Functions Go Below
// ____________________________________________________________

