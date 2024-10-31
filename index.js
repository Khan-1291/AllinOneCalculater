/*function lightmode() {
    document.body.style.backgroundColor='white';
    document.getElementById('mode').innerHTML='Click to Dark mode'
    
}*/










// G U inter face



function getRandomColour() {
    let c1 = Math.ceil(Math.random() * 240);
    let c2 = Math.ceil(Math.random() * 240);
    let c3 = Math.ceil(Math.random() * 240);
    return `rgb(${c1},${c2},${c3})`;
}
document.getElementById("mode").addEventListener("click", function () {
document.body.style.backgroundColor=getRandomColour();

})
function colourapply() {

    document.body.style.backgroundColor=getRandomColour();
    
}

//calculter logic
 

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let  historyArray =[];
let arry = Array.from(buttons);
arry.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
            historyArray.push(string);
        } else if (e.target.innerHTML == "C") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "D") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
         
       else if (e.target.innerHTML == "Change Body"){
        colourapply()

       }
        
        else if (e.target.innerHTML == "history") {
            displayHistory()
        }
        
        else if (e.target.innerText == "Calculte") {
            // Do nothing for the "Calculte" button
        }
        else if (e.target.innerText == "Calculate GPA") {
            // Do nothing for the "Calculte" button
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});





document.getElementById("per").addEventListener("click", function() {
    var obtained = parseFloat(document.getElementById("marks").value);
    var total = parseFloat(document.getElementById("total").value);

    if (total == 0) {
        document.getElementById("result").innerHTML = "Total marks cannot be zero.";
        return;
    }

    var percentage = (obtained / total) * 100;
    document.getElementById('result').innerText = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById('result').style.backgroundColor="white";
    document.getElementById('result').style.width="200px";
    document.getElementById('result').style.height="50px";

});



function displayHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = "<h3>History</h3>";
    historyArray.forEach((item, index) => {
        historyDiv.innerHTML += `<p>${index + 1}) Previous  Result ${item}</p>`;
    });
    historyDiv.style.display = 'block';
}


    
      
    
    // Get gpa.....................................................................
  
    function calculate () {
        let totalCridts=0;
        let totalPoints=0;
        for (let i = 0; i <=6; i++) {
            let houres =parseFloat(document.getElementById(`houres${i}`));
            let score =parseFloat(document.getElementById(`score${i}`));
            if (!isNaN(houres && !isNaN(score))){
                totalCridts +=houres;
                totalPoints +=score *houres;
            
            }
           let gpa = totalPoints/totalCridts;
           if (!isNaN(gpa)){
            document.getElementsById("result").innerText=`Your GPA is ${gpa.toFixed(2)}`;
    
           }
           else
           {
            document.getElementById("result").innerText=`Please enter correct data`
           }
    
            
        }
        
    }
    
    
    