
function displayMessage(){
   //This is where I get the value entered by the user
    var temperature = document.getElementById("temp").value;
    console.log(temperature + " is the number ");
//These are the different conditions for each temperature
    if (temperature >= 27){
        document.getElementById("wear").innerHTML = "Wear Shorts And Flip Flops";
    } 
    else if(temperature <=26 && temperature >= 20){
        document.getElementById("wear").innerHTML =  "Wear Long Pants And A T-Shirt";
    }
    else if(temperature <= 19 && temperature >= 15){
        document.getElementById("wear").innerHTML =  "Wear Pants And A Jacket";
    }
     else if(temperature <= 14 && temperature >= 10){
        document.getElementById("wear").innerHTML =  "Wear A Jacket, Boots And A Pair Of Jeans";
    } 
    else if(temperature <= 9 && temperature >= 1){
        document.getElementById("wear").innerHTML =  "Wear A Coat And Boots"
    } 
    else {
        document.getElementById("wear").innerHTML =  "Just Wear Half Of Your Wadrobe";
    }
}

