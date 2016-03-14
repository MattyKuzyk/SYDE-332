var settled = false
var map = []
var queue = []
var settled = false
var iterations = []
var number_collapsed = 0
var i = 0
var j = 0
var max = 100
var min = 0

for (var i = 0; i <= 100; i++) {
	var row = []
	for (var j = 0; j = 100; j++) {
		row.push(0)
	}
	console.log(row.length)
	map.push(row)

}
console.log(map.length)

while (!settled) {
	var i = Math.floor(Math.random() * (max - min + 1)) + min;
	var j = Math.floor(Math.random() * (max - min + 1)) + min;
	map[i][j] += 1
	queue.push([i,j])
	while (queue.length > 0) {
		console.log("sand")
		iterations.push(number_collapsed)
		var node = queue.pop()
		var i = node[0]
		var j = node[1]
		if (map[i][j] > 3) {
			number_collapsed += 1
			map[i][j] = 0
			settled = true
			updateNeighbours(i, j, queue)
		}
	}
}

console.log(iterations)



function updateNeighbours(i, j, queue) {
 	if (i < 99) {
 		map[i + 1][j] += 1
 		queue.push([i+1,j])
 	}
 	if (i > 0) {
 		map[i + 1][j] += 1
 		queue.push([i-1,j]) 		
 	}
 	if (j < 99) {
 		map[i][j + 1] += 1
 		queue.push([i-1,j]) 		
 	}
 	if (j > 0) {
 		map[i][j - 1] += 1
 		queue.push([i-1,j]) 		
 	}

}