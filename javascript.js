function demo1() {
    document.getElementById("button").innerHTML = "Button Clicked";
    var head = document.getElementsByTagName("h1");
    head[0].style.color = "yellow";

}

function demo() {

    var head = document.querySelectorAll(".head");
    head[1].style.background = "#570861";
}

function demo2() {
    const x = 50;
    {
        let y = 80;
        alert("The value of constant x:=" + x);
        alert("The value of y inside the block:=" + y);
    }
    x++;
    alert("The value of y outside the block:=" + y);
}

function demoA() {
    var num = [10, 20, 30, 40, 50];
    var sum = 0;

    for (var x = 0; x < num.length; x++) {
        sum += num[x];
    }
    document.getElementById("answer").innerHTML = `
                  Summation of numbers is :

    ${sum}`;
}

function demo3() {
    var num = [1, 2, 3, 4, 5];
    var sum = 0;
    for (x of num) {
        sum += x;
    }
    document.getElementById("output2").innerHTML = `
                  This is the output :

    ${sum}`;
}

function demo4(msg = "Msg") {
    document.getElementById("output3").innerHTML = add();
}

var add = () => "This is demo of arrow function";


class Patient {
    pat_id;
    pat_name;
    constructor(id, name) {
        this.pat_id = id;
        this.pat_name = name;
    }
    display() {
        document.getElementById("id").innerHTML += this.pat_id;
        document.getElementById("name").innerHTML += this.pat_name;
    }

}
function demo6() {
    var patient = new Patient(1111, " Crew");
    patient.display();
}


function createLocalStorage() {
    localStorage.clear();
    document.getElementById("empName").innerHTML += localStorage.getItem("empName");
    document.getElementById("empId").innerHTML += localStorage.getItem("empId");
    document.getElementById("department").innerHTML += localStorage.getItem("department");
}


