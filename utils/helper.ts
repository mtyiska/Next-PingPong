export function generateRandomNumber(x=1,y=20){
    return Math.floor(Math.random() * ((y-x)+1) + x)
};

export function generateRandomUser1(){
    return users1[generateRandomNumber(0, users1.length-1)]
}
export function generateRandomUser2(){
    return users2[generateRandomNumber(0, users2.length-1)]
}

const users1 = [
    "Lucius", 
    "Cashmere",
    "Jesse", 
    "Phoenix",
    "Gabby"
]
const users2 = [
    "Roger", 
    "Flopple",
    "Demetrius", 
    "Levenworth",
    "Lieutenant", 
    "Alonzo", 
]