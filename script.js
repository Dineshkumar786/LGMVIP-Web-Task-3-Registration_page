let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];

var n = 1;
var x = 0;


function addData(){
    let data =  document.getElementById('output');
    let newData = data.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("email").value;
    list3[x] = document.getElementById("age").value;
    list4[x] = document.getElementById("qual").value;
    list5[x] = document.getElementById("skill").value;

    let cel1 = newData.insertCell(0);
    let cel2 = newData.insertCell(1);
    let cel3 = newData.insertCell(2);
    let cel4 = newData.insertCell(3);
    let cel5 = newData.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;
 
    
}
