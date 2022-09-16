fetch('https://reqres.in/api/users',
{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
     body:JSON.stringify({name: "Jonatas"}) 
})
.then((res) =>res.json())
.then((data)=>console.log(data));


//then proximo passo que o fetch vai fazer depois que bater na url
//data -> informações