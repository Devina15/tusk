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
    console.log("ID : "+idn)
    
    var nam = document.getElementById("name").value;
    console.log("Name : "+nam)
                
    var dat = document.getElementById("dob").value;
    console.log("D.O.B : "+dat)
                
    var mob = document.getElementById("mobile").value;
    console.log("Mobile : "+mob)
                
    var mail = document.getElementById("email").value;
    console.log("Email : "+mail)
}
