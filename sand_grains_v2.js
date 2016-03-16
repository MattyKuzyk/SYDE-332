var _ = require('lodash')
var map = []
var q = []
var max = 100
var min = 0

//Populate map
for (var i = 0; i <= 100; i++) {
  var row = []
  for (var j = 0; j <= 100; j++) {
    row.push(0)
  }
  map.push(row)

}

function scan() {
  var overflows = []
  for (var i = 0; i <= 99; i++) {
    for (var j = 0; j <= 99; j++) {
      if (map[i][j] > 3) {
        overflows.push([i,j])
      }
    }
  }
  return overflows
}

for (var iterations = 0; iterations < 20000; iterations++) {
  var overflows = scan()
  var current_overflows = overflows.length
  // Resolve all overflows
  while (overflows.length > 0) {
    for (var i = 0; i < overflows.length; i++) {
      var row = overflows[i][0]
      var col = overflows[i][1]
      map[row][col] = 0
      if (row < 99)
        map[row + 1][col] += 1
      if (row > 0)
        map[row - 1][col] += 1
      if (col < 99)
        map[row][col + 1] += 1
      if (col > 0)
        map[row][col - 1] += 1
    }
    //Check for new overflows after resolving old ones
    var overflows = scan()
    current_overflows += overflows.length

  }
  q.push(current_overflows)
  var i = Math.floor(Math.random() * (max - min + 1)) + min;
  var j = Math.floor(Math.random() * (max - min + 1)) + min;
  map[i][j] += 1

}

console.log(q)
console.log(_.max(q))
