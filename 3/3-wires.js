const fs = require('fs');

const [wire1Instructions, wire2Instructions] = fs.readFileSync(__dirname + '/3-input.txt')
  .toString()
  .trim()
  .split("\r\n")
  .map(wire => wire.split(','))

wire1Instructions
wire2Instructions

// ForEach wire

  // Walk through instructions, update currentposition
  // Keep track of 4 corners, update them accordingly if borders passed
  // +---------+
  // |---------|
  // |---------|
  // |---------|
  // +---------+

// Find out largest dimesions

// ForEach wire
  // Create grid with dimensions
  // Draw lines

// Loop over grid
  // Check for each point if there are 'collisions' / crossings

// Loop over collisions
// Map to distance to center
// Find lowest distance (sort + head)