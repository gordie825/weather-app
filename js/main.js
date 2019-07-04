function myFunction(){
    var temperature = document.getElementById("temp").value;
    console.log(temperature + " is the number ");

    if (temperature >= 26){
        alert("Wear Shorts And Flip Flops");
    } 
    else if(temperature <=25 && temperature >= 20){
        alert("Wear Long Pants And A T-Shirt");
    }
    else if(temperature <= 19 && temperature >= 15){
        alert("Wear Pants And A Jacket");
    }
     else if(temperature <= 14 && temperature >= 10){
        alert("Wear A Jacket, Boots And A Pair Of Jeans");
    } else if(temperature <= 9 && temperature >= 3){
        alert("Wear A Coat And Boots");
    } 
    else {
        alert("Just Wear Half Of Your Wadrobe");
    }
}

