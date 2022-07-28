console.log("Client side javascript is running");


const form = document.querySelector('form');
const input = document.querySelector('input');
const message_1 = document.querySelector('#message-1');
const message_2 = document.querySelector('#message-2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();


    if(input.value == ""){
        message_1.innerHTML = "Add address in search bar";
    }
    else{
        message_2.innerHTML = "";
        message_1.innerHTML = "Loading..";
        fetch(`http://localhost:8000/weather?address=${input.value}`).then((response)=>{ //Here we are using the promise, bascially it means that go to the particular url and wait (async) and when 
                                                                                     //to get the response then callback. Now we are using one more call back because we are getting reponse in format of promise which we need to convert into json and then again wait untill it is processed.
            response.json().then((data)=>{
                if(data.error){
                    message_1.innerHTML = "";
                    message_2.innerHTML = `${data.error}`;
                }
                else{
                    message_1.innerHTML = "";
                    message_2.innerHTML = `${data.Location} \n ${data.Forecast}`
                }
            })
        });
    }
});