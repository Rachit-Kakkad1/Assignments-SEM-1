const { cos } = require("three/tsl");

console.log("Temperature category displayer !")
console.log(" ");   

let Temperature=20;

console.log(`The temperature is ${Temperature}°C !`)

if(Temperature<0){

    console.log("Frezzing Cold")

}

else if(Temperature>0 && Temperature<15){

    console.log("Very Cold")

}

else if(Temperature>16 && Temperature<25){

    console.log("Cold")

}

else if(Temperature>26 && Temperature<35){

    console.log("Warm")

}

else{

    console.log("Hot")

}