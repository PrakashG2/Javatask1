function fact() {

    var num = document.getElementById("num").value;
    copy = num;

    var fact = 1;
    var i = 1;

    do {
        fact = fact * i;
        i = i + 1;
    } while (i <= num);

    document.getElementById("out").innerHTML = "FACTORIAL OF " + copy + " IS " + fact;
}
function perfect() {
    var sum = 1;
    var num = document.getElementById("num").value;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }

    }
    if (sum == num) {
        document.write("Perfect Number");
    }
    else {
        document.write("Not Perfect Number");
    }

}

function gender() {
    var gender = document.getElementById("gender").value;
    console.log()

    if (gender == "male" || gender == "Male") {
        document.getElementById("out").innerHTML = "MALE";
    }
    else if (gender == "female" || gender == "Female") {
        document.getElementById("out").innerHTML = "FEMALE";
    }
    else {
        document.getElementById("out").innerHTML = "INVALID";
    }
}
function genderswitch() {
    var gender = document.getElementById("gender").value;
    console.log()
    switch (gender) {
        case "male":
            document.getElementById("out").innerHTML = "MALE";
            break;
        case "female":
            document.getElementById("out").innerHTML = "FEMALE";
            break;
        default:
            document.getElementById("out").innerHTML = "INVALID";
            break;
    }
}


function fib() {

    var num = document.getElementById("num").value;
    var a = -1, b = 1, c = 0;
    var i = 1;
    str1 = new String;

    while (i <= num) {
        c = a + b;
        a = b;
        b = c;
        str1 = str1 + " " + c;
        i++;
        console.log();
    }
    document.getElementById("out").innerHTML = str1;


}




function create_account() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var number = document.getElementById("number").value;
    var district = document.getElementById("district").value;
    var pin = document.getElementById("pin").value;
    console.log(name)


    alert("REGISTERED SUCCESSFULLY");
    document.write("NAME : "+name+"<br>");
    document.write("EMAIL : "+email+"<br>");
    document.write("GENDER : "+gender+"<br>");
    document.write("MOBILE NUMBER : "+number+"<br>");
    document.write("DISTRICT : "+district+"<br>");
    document.write("PINCODE : "+pin+"<br>");


}