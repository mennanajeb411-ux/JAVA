let email= document.querySelector("#email")
let password= document.querySelector("#password")
let fname= document.querySelector("#fname")
let lname= document.querySelector("#lname")
let signupbtn= document.querySelector("#sign_up")

signupbtn.onclick=function(e){
    e.preventDefault();
    if(email.value === "" || password.value==="" ||  fname.value==="" ||  lname.value===""){
        alert("Please , fill the information")
    }
    else{
        alert(" Your account is Ready !!")
        setTimeout(function(){
            window.location="login.html"
            
        },1000)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        localStorage.setItem("fname", fname.value)
        localStorage.setItem("lname", lname.value)
    }
}