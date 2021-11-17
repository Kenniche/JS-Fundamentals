// OPTIMAL COINCHANGE
function coinChange(num){
    //turn an obj into a number
    var new_num = 0;
    for (key in num) {
    if (key === "dollar"){
        new_num += num.dollar*100;
    }
    else if(key === "quarter"){
        new_num += num.quarter*25;
    }
    else if(key === "dime"){
        new_num += num.dime*10;
    }
    else if(key === "nickle"){
        new_num += num.nickle*5;
    }
    else if(key === "cent"){
        new_num += num.cent;
    }
    }
//figure optimal coin combo
var obj = {};
var dollar = 0;
var quarter = 0;
var dime = 0;
var nickle = 0;
var cent = 0;
while(new_num > 0){
    if(new_num >= 100){
        dollar += 1;
        new_num -= 100;
        obj.dollar = dollar;
    }
    else if(new_num >= 25){
        quarter += 1;
        new_num -= 25;
        obj.quarter = quarter;
    }
    else if(new_num>=10){
        dime += 1;
        new_num -= 10;
        obj.dime = dime;
    }
    else if(new_num>=5){
        nickle += 1;
        new_num -= 5;
        obj.nickle = nickle;
    }
    else {
    cent = new_num;
    obj.cent = cent;
    }
}
console.log(obj);
return obj;
}
coinChange({dollar: 2, dime: 15, cent: 5});

