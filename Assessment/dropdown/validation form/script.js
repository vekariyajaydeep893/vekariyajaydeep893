function validateform(){
    // let a=document.forms["myform"]["fname"].value;
    // if(a==""){
    //     alert("Please enter your fast name");
    //     return;
    // }
    // let 

    var fname=document.myform.fname.value;
    var lname=document.myform.lname.value;
    var email=document.myform.email.value;
    var number=document.myform.number.value;
    var radio=document.myform.radio.value;
    var dob=document.myform.dob.value;
    var text=document.myform.text.value;
    var city=document.myform.city.value;
    var pin=document.myform.pin.value;
    var state=document.myform.state.value;
    var password=document.myform.password.value

    if(fname==null || fname==""){
        alert("Please enter your fast name");
        return false;
    }
    else if(lname==null || lname==""){
        alert("Please enter your last name");
        return false;
    }
    else if(email==null || email==""){
        alert("Please enter your email");
        return false;
    }
    else if(radio==null || radio==""){
        alert("Please select Gender");
        return false;
    }
    else if(number==null || number==""){
        alert("Please enter your mobile number");
        return false;
    }
    else if(dob==null || dob==""){
        alert("Please select Date of Birth");
        return false;
    }
    else if(text==null || text==""){
        alert("Please enter your Address");
        return false;
    }
    else if(city==null || city==""){
        alert("Please enter your city name");
        return false;
    }
    else if(pin==null || pin==""){
        alert("Please enter your PIN number");
        return false;
    }
    else if(state==null || state==""){
        alert("Please enter your state name");
        return false;
    }
    else if(password==null || password==""){
        alert("Please enter Password");
        return false;
    }


}