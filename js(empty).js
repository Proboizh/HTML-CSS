const form = document.querySelector("form")

form.addEventListener("submit" ,(e) =>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username ,password)

    if(authenticated){
        alert("Loged in")
    }else{
        alert("Login Failed (Userrname or passwerd wrong")
    }

})

function authentication(username,password){
    if(username === "admin" && password === "admin1234"){
        return true
    }else{
        return false
    }
    
}

