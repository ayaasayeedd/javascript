function reg(){
    var Username = document.getElementById("uname").value 
    var Password = document.getElementById("psw").value


    window.localStorage.setItem("username",Username)
    window.localStorage.setItem("password",Password)

    document.cookie = "username" + Username + ", password" + Password;
}