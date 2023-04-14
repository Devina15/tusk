const l1 = document.querySelector('.button');
l1.addEventListener('click',(e)=> {
   e.preventDefault();
    document.querySelector('#formblock').style.background = 'powderblue';
});

const l2 = document.querySelector('.button');
l2.addEventListener('mouseover',(e)=> {
    e.preventDefault();
    document.querySelector('#formblock').style.background = 'pink'; 
});

const l3 = document.querySelector('.button');
l3.addEventListener('mouseout',(e)=> {
   e.preventDefault();
    document.querySelector('#formblock').style.background = 'beige'; 
});


function details(formblock){
    var idn = document.getElementById("idn").value;
    let obj = {
        id:document.getElementById("idn").value,
        name:document.getElementById("name").value,
        dob:document.getElementById("dob").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value
    };
    let objS = JSON.stringify(obj);
    localStorage.setItem(idn,objS);
    //let objD = JSON.parse(localStorage.getItem('obj'));
    printOnScreen(obj);
}

function printOnScreen(obj){
    var parentElem = document.getElementById('listOfStd');
    
    var childElem = document.createElement('li');
    childElem.textContent = obj.id+' , '+obj.name+' , '+obj.dob+' , '+obj.mobile+' , '+obj.email;
    parentElem.appendChild(childElem);
}

