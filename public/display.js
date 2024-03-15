let placeholder = document.querySelector("#data-output");
let msg = document.getElementById('msg');
let users=[];
getFromServer();
function renderUsers(users){
	
	placeholder.innerHTML = '';
	if(users.length === 0){
		out=`<h2 style= "color:red; text-align:center;">No data to display</h2>`;
		msg.innerHTML = out;
	}
	else{
    let index =1;
	for(let user of users){
		const tr=document.createElement('tr');
		tr.setAttribute('data-key',user._id);
		tr.innerHTML= `
			<tr>
				<td>${index}</td>
				<td>${user.username}</td>
				<td>${user.email}</td>
				<td>${user.phone}</td>
				<td>${user.fname}</td>
				<td>${user.address}</td>
				<td style="padding:0px"><button class="del-btn">Delete</button></td>
			</tr>
		`;
        index++;

	placeholder.append(tr);
	}
	}	
}
function getFromServer(){
	fetch("/admin/userDetails")
	.then((response)=>{
		return response.json();
	})
	.then((data)=>{
		users = data;
		renderUsers(users);
	})
	}
function deleteUser(id){
	fetch('/admin/deleteUser/'+id,{
        method: "DELETE" ,
        headers: {
            "Content-Type":"application/json",
        },
    }).then((res)=>{
        if(res.status === 200){
            getFromServer();
        }
        else{
            alert("Something went Wrong!!!");
        }
    })
}

placeholder.addEventListener('click',(event)=>{
	if(event.target.classList.contains('del-btn')){
        deleteUser(event.target.parentElement.parentElement.getAttribute('data-key'));
    }
})