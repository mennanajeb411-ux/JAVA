let email= document.querySelector("#email")
let password= document.querySelector("#password")
let signinbtn= document.querySelector("#sign_in")
let getemail = localStorage.getItem("email")
let getpass = localStorage.getItem("password")


signinbtn.onclick=function(e){
    e.preventDefault();
    if(email.value =="" || password.value == ""){
        alert("Please, fill in all information")
    }
    else{
        if(getemail.trim()=== email.value.trim() && getpass.trim()=== password.value.trim()){
              setTimeout(function(){
                window.location="Home.html"
              }, 1000)
        }
        else{
            alert("Wrong information , try again")
        }
    }
}