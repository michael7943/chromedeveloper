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