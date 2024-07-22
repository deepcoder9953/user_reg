// Check if a user is already logged in
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

function loadPageFun() {
    if (loggedInUser) {
        console.log("Already logged in, redirecting to index.html");
        window.location.href = "index.html";
    }
}

var userData = JSON.parse(localStorage.getItem("users")) || [];
console.log("Loaded user data from localStorage:", userData);

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var formElement = document.querySelector("form");

    var loginObject = {
        email: formElement.email.value,
        password: formElement.password.value
    };

    console.log("Login attempt with:", loginObject);

    var filteredUser = userData.filter(function(ele, index) {
        if (ele.email === loginObject.email && ele.password === loginObject.password) {
            userData[index].status = true;
            localStorage.setItem("users", JSON.stringify(userData));
            return ele;
        }
    });

    if (filteredUser.length > 0) {
        var loginUser = {
            name: filteredUser[0].name,
            email: filteredUser[0].email
        };
        localStorage.setItem("loggedInUser", JSON.stringify(loginUser));
        alert("Logged in successfully.");
        console.log("Login successful, redirecting to index.html");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username and Password.");
        console.log("Login failed, invalid credentials.");
    }
});

loadPageFun();
