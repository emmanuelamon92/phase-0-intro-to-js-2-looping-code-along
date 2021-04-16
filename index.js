// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
const event = 'birthday'

let writeCards = (names, event) => {
    const newArr = []
    for (var i = 0; i < names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
}

let countDown = (num) => {
    while(num >= 0){
        console.log(num)
        num-=1
    }
}