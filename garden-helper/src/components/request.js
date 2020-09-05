import React from 'react';
import Request from '/request';

function login(email,password){
       
    let email = $('input[name="email"]').val();
    let password = $('input[name="password"]').val();

    $.ajax({
        method: "POST",
        url: "http://127.0.0.1:3000/user/signin", 
        data: {
            email: `${email}`,
            password: `${password}`
        }
    }).done((response) => {
        if (response.success) {
            console.log(response.success);
            sessionStorage.setItem('userid', response.userid);
            
        }
        else
            console.log(response.error);
    });

}

function signUp(userName,email,password){
    
    let userName = $('input[name="userName"]').val();
    let password = $('input[name="password"]').val();
    let email = $('input[name="email"]').val();

    $.ajax({
        method: "POST",
        url: "http://127.0.0.1:3000/user/signup",  
        data: {
            userName: `${userName}`,
            email: `${email}`,
            password: `${password}`
        }
    })
}
export default Request