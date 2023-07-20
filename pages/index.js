const table = document.getElementById('userstbl');
const addname = document.getElementById('addname');
const addcountry = document.getElementById('addcountry');
const addnumber = document.getElementById('addnumber');
const delID = document.getElementById('idnum');
const updname = document.getElementById('updname');
const updcountry = document.getElementById('updcountry');
const updnumber = document.getElementById('updnumber');
const updid = document.getElementById('updid');



async function CRUD(type){ 
    var res = [];
    switch(type) {
        case 'add':
            res = await fetch(`http://127.0.0.1:3000/api/User?name=${addname.value}&country=${addcountry.value}&number=${addnumber.value}`, {method: 'POST'});
            location.reload();
            break;
        case 'delete':
            res = await fetch(`http://127.0.0.1:3000/api/User/${delID.value}`, {method: 'DELETE'});           
            location.reload();
            break;
        case 'update':
            res = await fetch(`http://127.0.0.1:3000/api/User/${updid.value}?name=${updname.value}&country=${updcountry.value}&number=${updnumber.value}`, {method: 'PUT'});           
           location.reload();
            break;
           case 'table':
            res = await fetch('http://127.0.0.1:3000/api/Users', {method: 'GET'});    
            const myJson = await res.json();
            let output = '<tr><th>id</th><th>name</th><th>country</th><th>number</th></tr>';
            myJson.forEach(row => {
                output +=`<tr>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.country}</td>
                <td>${row.number}</td>
            </tr>`
            });
            table.innerHTML = output;
            break;
      }

}