const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num3, num4) => num3 * num4;
const ans = new Array(9);
for(let i = 0; i < 9; i++) {

    // Assigned all h2 headers to the variable problemHeading
    let problemHeading = document.querySelectorAll("h2")[i];
    // Assigns the problem to the paragraph 
    let problemParagraph = document.querySelectorAll("p")[i];
    // Assigns the answers to the list items 
    let answerList = document.querySelectorAll("li")[i];
    // Generates random numbers for addition and substraction ranging from 1 to 100
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;
    // Generates random numbers for multiplication and division ranging from 0 to 12
    let num3 = Math.floor(Math.random() * 12) + 1;
    let num4 = Math.floor(Math.random() * 12) + 1;

    // Generates a random number between 0 - 2 that will decide which problem to generate
    let problemType = Math.floor(Math.random() * 3);
    // Generates the problem Headings
    problemHeading.innerText = "Problem " + (i + 1);

    if (problemType == 0) {
        problemParagraph.innerText = num1 + " + " + num2 + " = ";
        answerList.innerText = add(num1, num2);
        ans[i] = add(num1, num2);
    } 
    if (problemType == 1) {
        if (num1 < num2) {
            problemParagraph.innerText = num2 + " - " + num1  + " = ";
            answerList.innerText = sub(num2, num1);
            ans[i]= sub(num2, num1);
        } else {
            problemParagraph.innerText = num1 + " - " + num2  + " = ";
            answerList.innerText = sub(num1, num2);
            ans[i] = sub(num1, num2);
        }
        
    } 
    if (problemType == 2) {
        problemParagraph.innerText = num3 + " x " + num4  + " = ";
        answerList.innerText = mul(num3, num4);
        ans[i] = mul(num3, num4);
    }
}

function checkAnswers() {
    for (j = 0; j < 9; j++) {
        let inputList =  document.querySelectorAll("input")[j];
        if (inputList.value == ans[j]) {
            inputList.style.borderBlockColor = 'green';
            inputList.style.borderStyle = 'solid';
        }
        else {
            inputList.style.borderBlockColor = 'red';
            inputList.style.borderStyle = 'solid';
        }
    }
    document.getElementById("hiddenContent").style.display = 'flex'

  }
