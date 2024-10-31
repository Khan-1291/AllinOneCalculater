
function calculate() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= 6; i++) {
        let hours = parseFloat(document.getElementById(`hours${i}`).value);
        let score = parseFloat(document.getElementById(`score${i}`).value);

        if (!isNaN(hours) && !isNaN(score)) {
            totalCredits += hours;
            totalPoints += score * hours;
        }
    }

    let gpa = totalPoints / totalCredits;

    if (!isNaN(gpa) && totalCredits > 0) {
        document.getElementById("result").innerText = `Your GPA is ${gpa.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = `Please enter correct data`;
    }
}



function getRandomColour() {
    let c1 = Math.ceil(Math.random() * 240);
    let c2 = Math.ceil(Math.random() * 240);
    let c3 = Math.ceil(Math.random() * 240);
    return `rgb(${c1},${c2},${c3})`;
}
document.getElementById("zk").addEventListener("click", function () {
document.body.style.backgroundColor=getRandomColour();
document.body.style.Color=getRandomColour();


})