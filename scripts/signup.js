let form = document.querySelector("form")

form.addEventListener("submit", function(event){
let formfname = event.target.name.value;
let formnum = event.target.number.value;
let formemail = event.target.email.value;
let formpassword = event.target.password.value; 

console.log(formfname,formnum,formemail,formpassword)

var userRegister = JSON.parse(localStorage.getItem("userInfo")) || []
    userRegister.push({
        "name": formfname,
        "number": formnum,
        "email": formemail,
        "password": formpassword
    })

localStorage.setItem("userInfo",JSON.stringify(userRegister))
alert("user registered")
event.target.reset()
event.preventDefault()
})