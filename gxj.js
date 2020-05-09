
function check(room, target){
	for (var i=0; i<5; i++){
		if (room[i]<target[i]) {
			return false
		}
	}
	return true
}

function count(room) {
	res = 0
	for (var i=0; i<5; i++){
		res += room[i]
	}
	return res
}

function checkAll(rooms, target){
	for (var r=0; r<6; r++){
		room = rooms[r]
		if(count(room)>5){
			return -1
		}
	}
	for (var r=0; r<6; r++){
		room = rooms[r]
		flag = check(room, target)
		if (flag){
			return 1
		}
	}
	return 0
}

function shuffle(ideas){
	rooms = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
	for(var i=0; i<5; i++){
		for (var j=0; j<ideas[i]; j++){
			rooms[Math.floor(Math.random()*6)][i]+=1
		}
	}
	return rooms
	// console.log(rooms)
}


function MC(ideas, target, times=100000){
	// times = 100000
	// possible = 0
	attack = 0
	valid = 0
	for (var i = 0; i < times; i++) {
		rooms = shuffle(ideas)
		status = checkAll(rooms, target)
		if (status==0){
			valid+=1
		}
		if (status==1){
			attack+=1
			valid+=1
		}
	}
	// console.log(attack)
	// console.log(valid)
	return attack/valid
}


// idea_names = ['vo', 'da', 'vi', 'me', 'sp']
// ideas = [1,1,4,1,4]
// target = [0,0,1,0,1]

// times = 100000 // 试电脑性能调整
// ideas = [1,1,2,1,1]
// target = [0,0,1,0,1]
// MC(ideas, target)
