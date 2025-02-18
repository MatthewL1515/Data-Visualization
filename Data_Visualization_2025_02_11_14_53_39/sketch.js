// Variables

const majorsURL = "https://raw.githubusercontent.com/fivethirtyeight/data/refs/heads/master/college-majors/all-ages.csv"

let majorsTable
let selectedMajors = []
let selectedRates = []
let currentIndex = 0
let barWidth
let maxHeight = 300 // tentative, can be changed as needed

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
  pickNextMajors()
  barWidth = width / (selectedMajors.length + 2) * 0.5
  
}

// ____________________________________________________________
// Draw Function

function draw() {
  background(220)
  
  let dx = width / (selectedMajors.length + 2)
  
  drawTitle()
  drawAxes()
  YAxisLabel()
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
  line(50, 350, width - 100, 350)
  
  // Y Axis Line
  line(50, 350, 50, 50)
}
// ____________________________________________________________
// Y-axis Label

function YAxisLabel() {
  push()
  textSize(14)
  translate(30, height / 2 - 50)
  rotate(-PI/2)
  text("Employed Rate (%)", 0, 0)
  pop()
}

// ____________________________________________________________
// Function to Pick the Next 5 Majors (Goes in a sequence order)
function pickNextMajors() {
  selectedMajors = []
  selectedRates = []

  
  for (let i = currentIndex; i < currentIndex + 5; i++) {
    if (i < majorsTable.getRowCount()) {
      let totalGrads = int(majorsTable.getString(i, "Total"))
      let employedGrads = int(majorsTable.getString(i, "Employed"))

      let employmentRate = (employedGrads / totalGrads) * 100
      
      selectedMajors.push(majorsTable.getString(i, "Major"))
      selectedRates.push(employmentRate)
    }
  }

  // Goes to the next five majors
  // % is there so that if it goes over the number of majors, it loops back to the starting point
  currentIndex = (currentIndex + 5) % majorsTable.getRowCount()
}
