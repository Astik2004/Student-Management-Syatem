const profile = document.getElementById('profile');
fetch('/getUserDetail')
        .then((res)=>{
            if(res.status === 200){
                return res.json(); 
            }
            else{
                alert("Something weird happened!!!");
            }
        }).then((data)=>{
             profile.innerHTML=`<img src ="th.jpeg" width="20px"> ${data.username}`;
    });

function logout(){
    fetch('/logout')
        .then((res)=>{
            if(res.status === 200){
                return true;
            }
            else{
                alert("Something weird happened!!!");
                return false;
            }
        })
    
    
}



fetch('/getUserDetail')
.then(response => response.json())
.then(data => {
        const table = document.getElementById('dataTable');
        let row = `<tr>
                        <td>Name</td>
                        <td>${data.username}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td> ${data.email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td> 
                        <td>${data.phone}</td>
                    </tr>
                    <tr>
                        <td>Father's Name</td> 
                        <td>${data.fname}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>${data.address}</td>
                    </tr>`;
        table.innerHTML += row;
})
.catch(error => console.error('Error:', error));  
