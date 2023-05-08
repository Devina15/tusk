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
    let obj = {
        name:document.getElementById("name").value,
        dob:document.getElementById("dob").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value
    };
    axios.post('https://crudcrud.com/api/fe0cd239ab1140e3829489bb93ce3915/userData', obj)
        .then(res => printOnScreen(res.data,res.data._id))
        .catch(err => console.log(err))
}

function printOnScreen(obj,idn){
    var parentElem = document.getElementById('listOfStd');
    var childElem = document.createElement('li');
    childElem.className = 'userDetails';
    childElem.setAttribute('data-key',idn);
    childElem.textContent = obj._id+' , '+obj.name+' , '+obj.dob+' , '+obj.mobile+' , '+obj.email;
    parentElem.appendChild(childElem);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    childElem.appendChild(deleteBtn);   
    
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary edit';
    editBtn.setAttribute('id','edit-btn');
    editBtn.appendChild(document.createTextNode('Edit'));
    childElem.appendChild(editBtn);
    
    var changeItem = document.getElementById('edit-btn');
    changeItem.addEventListener('click',editItem);
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

function editItem(e){
    var li = e.target.parentElement;
    
    const key = e.target.parentElement.getAttribute('data-key');
    let objD = JSON.parse(localStorage.getItem(key));
    
    var id = document.getElementById("idn");
    id.value = objD.id;
    var name = document.getElementById("name");
    name.value = objD.name;
    var dob = document.getElementById("dob");
    dob.value = objD.dob;
    var mobile = document.getElementById("mobile");
    mobile.value = objD.mobile;
    var email = document.getElementById("email");
    email.value = objD.email;
    
    userList.removeChild(li);
    localStorage.removeItem(key);
}
