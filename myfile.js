
var answerText = document.getElementById("answerTextId");
var buttonAnswer = document.getElementById("showAnswerId");
var message = document.querySelector('#showMessage');

function onClickEvent(){
    let mycount = 2
    alert("you have clicked"+mycount+"exercise")
    mycount=nestedcall(mycount)
    alert("you have clicked"+mycount+"exercise")
}

function nestedcall(count){
    console.log("reached nestedcall")
    return count+6
}

function showAnswer() {
	answerText.innerText = "No. Hyperlinks can be used on both text and images.";
    message.innerHTML = "<span style='color:red;'>You have revealed the answer.</span>";
}

buttonAnswer.addEventListener("click", showAnswer);