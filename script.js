//setting fields to check whether the input is correct or not
var namecheck=false
var phonecheck=false
var emailcheck=false
var passwordcheck=false
var confirmpasswordcheck=false

//selecting containers
var usernamecontainer=document.querySelector(".username")
var phonecontainer=document.querySelector(".phone")
var emailcontainer=document.querySelector(".email")
var passwordcontainer=document.querySelector(".password")
var confirmpasswordcontainer=document.querySelector(".confirmpassword")


//selecting icons
var usernameicon=usernamecontainer.querySelector("i")
var phoneicon=phonecontainer.querySelector("i")
var emailicon=emailcontainer.querySelector("i")
var passwordicon=passwordcontainer.querySelector("i")
var confirmpasswordicon=confirmpasswordcontainer.querySelector("i")

//selecting labels
var usernamelabel=usernamecontainer.querySelector("label")
var phonelabel=phonecontainer.querySelector("label")
var emaillabel=emailcontainer.querySelector("label")
var passwordlabel=passwordcontainer.querySelector("label")
var confirmpasswordlabel=confirmpasswordcontainer.querySelector("label")

//selectint input box
var usernameinput=document.getElementById("username")
var phoneinput=document.getElementById("phone")
var emailinput=document.getElementById("email")
var passwordinput=document.getElementById("password")
var confirmpasswordinput=document.getElementById("confirmpassword")


//for username
usernameinput.addEventListener("keyup",function()
{
    var enteredvalue = usernameinput.value
    if(enteredvalue=="")
    {
        usernamelabel.style.visibility="visible"
        usernameicon.style.visibility="hidden"
        namecheck=false
    }
    else{
        usernameicon.style.visibility="visible"
        usernamelabel.style.visibility="hidden"
        namecheck=true
    }
}) 

//for phone
phoneinput.addEventListener("keyup",function()
{
    var enteredvalue = phoneinput.value
    if(enteredvalue=="")
    {
        phonelabel.style.visibility="visible"
        phoneicon.style.visibility="hidden"
        phonelabel.textContent="Please enter your mobile number"
        phonecheck=false
    }
    else if(enteredvalue.length!=10)
    {
        phonelabel.style.visibility="visible"
        phoneicon.style.visibility="hidden"
        phonelabel.textContent="Please enter 10 digit mobile number"
        phonecheck=false

    }
    else{
        phoneicon.style.visibility="visible"
        phonelabel.style.visibility="hidden"
        phonecheck=true
    }
}) 

//for email
emailinput.addEventListener("keyup",function()
{
    var enteredvalue=emailinput.value
    if(enteredvalue=="")
    {
        emaillabel.style.visibility="visible"
        emailicon.style.visibility="hidden"
        emaillabel.textContent="Please Enter Your email"
        emailcheck=false
    }

    else{
        emailicon.style.visibility="visible"
        emaillabel.style.visibility="hidden"
        emailcheck=true
    }


})

//for password
passwordinput.addEventListener("keyup",function()
{
    var enteredvalue=passwordinput.value
    if(enteredvalue=="")
    {
        passwordlabel.style.visibility="visible"
        passwordicon.style.visibility="hidden"
        passwordlabel.textContent="Create your password"
        passwordcheck=false
    }

    

    else{
        passwordicon.style.visibility="visible"
        passwordlabel.style.visibility="hidden"
        passwordcheck=true
    }


})

//for confirm password
confirmpasswordinput.addEventListener("keyup",function()
{
    var enteredvalue=confirmpasswordinput.value
    if(enteredvalue == "")
    {
        confirmpasswordlabel.style.visibility="visible"
        confirmpasswordicon.style.visibility="hidden"
        confirmpasswordlabel.textContent="Re-enter your password"
        confirmpasswordcheck=false

    }
    else if(enteredvalue != passwordinput.value)
    {
        confirmpasswordicon.style.visibility="hidden"
        confirmpasswordlabel.style.visibility="visible"
        confirmpasswordlabel.textContent="Entered password does not match"
        confirmpasswordcheck=false
    }

    else
    {
        confirmpasswordicon.style.visibility="visible"
        confirmpasswordlabel.style.visibility="hidden"
        confirmpasswordcheck=true
    }
})

//selecting submit button
var submitinput=document.getElementById("submitButton")
var popup=document.querySelector(".popup")
submitinput.addEventListener("click",function(e)
{
    //preventing default refresh
    e.preventDefault()
    if(namecheck==true && phonecheck==true && emailcheck==true && passwordcheck==true && confirmpasswordcheck==true)
    {
        popup.textContent="Form Submitted Succesfully"
        popup.style.backgroundColor="#6BE9FB"
        popup.style.top="10px"
        popup.style.opacity="1"
    //set timeout
    }
    else{
        popup.textContent="Please fill the form"
        
       popup.style.backgroundColor="red"
       popup.style.top="10px"
       popup.style.opacity="1"
    }
    setTimeout(function()
    {
        popup.style.top="-40px"
        popup.style.opacity="0"
    },2000)
        
    
    


    
})