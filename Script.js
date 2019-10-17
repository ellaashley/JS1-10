
function sleep_in(weekday,vacation) {
    return vacation || !weekday;
}

function monkey_trouble(a_smile, b_smile) {
    return a_smile&&b_smile || !a_smile&&!b_smile;
}

function string_times(x, y) {
    var z = "";
    for(var i=0; i<y; i++){
        z = z+x;
    }
    return z;
}

function front_times(x, y) {
    var z = "";
    x = x.substring(0,3);
    for (var i = 0; i < y; i++) {
        z = z + x;
    }
    return z;
}

function string_bits(str) {
    var z = "";
    for(var i=0; i<str.length; i++){
        if(i % 2 == 0) {
            z += str.substring(i, i + 1);
        }
    }
    return z;
}

function caughtSpeeding(x,y) {
    if(y == true) {
        x = x - 5;
    }
    if(x<=60){
        return 0;
    }
    if(x>=61 && x<=80){
        return 1;
    }
    if(x>=81){
        return 2;
    }
}

function fizz_buzz(x){
    var z = "!";
    if(x%5==0 && x%3==0){
        z = "FizzBuzz";
        return z;
    }else {
        if (x % 3 == 0) {
            z = "Fizz";
            return z;
        }
        if (x % 5 == 0) {
            z = "Buzz";
            return z;
        }
    }
    if(x%3!=0 && x%5!=0){
        z = x + z;
        return z;
    }
}

function teaParty(x,y){
    var z = 2
    if(x>=5 && y>=5){
        z = 1;
    }
    if(x>=2*y || y>=2*x){
        z = 2;
    }
    if(x<5 || y<5){
        z = 0;
    }
    return z;
}

function blackjack(x,y){
    if(x > 21 && y > 21){
        return 0;
    }
    if(y > 21){
        return x;
    }
    if(x > 21){
        return y;
    }
    if(21-x > 21-y){
        return y;
    }
    if(21-y > 21-x){
        return x;
    }
}

function loneSum(a,b,c){
    if(a==b && b==c) {
        a = 0;
        b = 0;
        c = 0;
    }else{
        if (a == b) {
            a = 0;
            b = 0;
        }
        if (b == c) {
            b = 0;
            c = 0;
        }
        if (c == a) {
            c = 0;
            a = 0;
        }
    }
    return a+b+c;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(x, y);
    document.getElementById("output").innerHTML += front_times(x, y);
    document.getElementById("output").innerHTML += string_bits(str);
    document.getElementById("output").innerHTML += caughtSpeeding(x, y);
    document.getElementById("output").innerHTML += fizz_buzz(x);
    document.getElementById("output").innerHTML += teaParty(x, y);
    document.getElementById("output").innerHTML += blackjack(x, y);
    document.getElementById("output").innerHTML += loneSum(a, b, c);
}