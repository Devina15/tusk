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

var userList = document.getElementById('listOfStd');
userList.addEventListener('click',removeItem);

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
    printOnScreen(obj,idn);
}

function printOnScreen(obj,idn){
    var parentElem = document.getElementById('listOfStd');
    var childElem = document.createElement('li');
    childElem.className = 'userDetails';
    childElem.setAttribute('data-key',idn);
    childElem.textContent = obj.id+' , '+obj.name+' , '+obj.dob+' , '+obj.mobile+' , '+obj.email;
    parentElem.appendChild(childElem);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);   
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            const key = e.target.parentElement.getAttribute('data-key');
            userList.removeChild(li);
            localStorage.removeItem(key);
            
            }
    }
}
