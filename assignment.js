// Program to convert kilometer to meter

function kilometerToMeter(km){
    if(km>=0){
        var meter=km*1000;
        return meter;
    }else{
        return "error";
    }
}

var meter=kilometerToMeter(1);
console.log(meter);

//Create budgetCalculotor program

function budgetCalculator(watch, mobile, laptop){
    if(watch>=0 && mobile>=0 && laptop>=0){
            var watchCost=watch*50;
            var mobileCost=mobile*100;
            var laptopCost=laptop*500;

            var totalCost=watchCost+mobileCost+laptopCost;
            return totalCost;
    }else{
        return "error";
    }
}

var total=budgetCalculator(1, 6, 2);
console.log(total);

//Program to calculate hotel cost

function hotelCost(nthDay){
    if(nthDay>=0 && nthDay<=10){
        var cost=nthDay*100;
        return cost;
    }else if(nthDay<=20 && nthDay>=0){
        var firstCost=10*100;
        var secondCost=(nthDay-10)*80;
            cost=firstCost+secondCost;
        return cost;
    }else if(nthDay>20){
             firstCost=10*100;
             secondCost=10*80;
        var  thirdCost=(nthDay-20)*50;
             cost=firstCost+secondCost+thirdCost;

             return cost;
    }else{
        return "error";
    }
}

var result=hotelCost(22);
console.log(result);

//program to find big string from array

function megaFriend(arr){
    var friend=arr[0];
    for(var i=1; i<arr.length; i++){
        var element=arr[i];

        if(element.length>friend.length){
            friend=element;
            
        }
    }
    return friend;
}
var arr=["Ahasanullah Rahi Korim","Rohim", "Korim","Mohinullah Khatun Bihar bin Shadid", "Mohammad Abdullah", "Ahsan Ullah", "Raihan"];

var bigFriend=megaFriend(arr);
console.log(bigFriend);