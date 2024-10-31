

function calculateAge() {
    const input=document.getElementById("info").value;
    if (!input){
        alert("Please Enter Your Date Of Birth");
        return;
    }
    const birthDate= new Date(input);
    const today    = new Date()
    let age = today.getFullYear() - birthDate.getFullYear();

    //let monthDifference=today.getMonth()-birthDate.getMonth();
    //let dayDiffrence =today.getDay()-birthDate.getDay();



    
    if (age <=1){
        alert (`You are: ${age} year  old`)

    }
    else{
        alert (`You are: ${age} years  old`)
    }
    
    
 
}





    
    

    //let age = today.getFullYear() - birthDate.getFullYear();
    //const monthDifference = today.getMonth() - birthDate.getMonth();

    //if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    //    age--;
    //}

   // alert(`Your age is: ${age} years old.`);
//}
