console.log("Student Grade Calculator");
console.log(" ");   

const sub1=90;
const sub2=90;
const sub3=90;
const sub4=94;
const sub5=98;

const total=sub1+sub2+sub3+sub4+sub5;

console.log(`Your total marks are ${total}`)

const percentage=(total/500)*100;

if(total>90 && percentage<=100){

    console.log("Grade A");
    console.log(`Your percentage is ${percentage}%`);
    
}
else if(percentage>=80 && percentage<=89){

    console.log("Grade B");
    console.log(`Your percentage is ${percentage}%`);
    
}
else if(percentage>=70 && percentage<=79){

       console.log("Grade C");
       console.log(`Your percentage is ${percentage}%`);

    }

else if(percentage>=60 && percentage<=69){

    console.log("Grade D");
    console.log(`Your percentage is ${percentage}%`);
    
}
else{

    console.log("Fail");
    console.log(`Your percentage is ${percentage}%`);
}
