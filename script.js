let box=document.querySelectorAll(".box");
let person0=true;
let rest=document.querySelector("#reset");

let newGame=document.querySelector("#newGame")
let msg=document.querySelector("#text")
let winnerDiv=document.querySelector(".msgContainer")
const winningPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count=0;
box.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(person0){
        box.innerText="O"
        person0=false;
    }else{
        box.innerText="X"
        person0=true;
    }
    count++;
    if(count>=8){
        drawMatch();
    }
    box.disabled=true;
    checkWinner()
})
});
const drawMatch=()=>{
    msg.innerText="It's a tie ! No one wins"
    winnerDiv.classList.remove('hide');
    disableBoxes();
}



const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1=box[pattern[0]].innerText
        let pos2=box[pattern[1]].innerText
        let pos3=box[pattern[2]].innerText
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
            return;
        }
    }
    }
}
const showWinner = (pos1) => {
    msg.innerHTML= `Congratulations!! Winner is ${pos1}`;
    winnerDiv.classList.remove('hide');
    disableBoxes();
    
}
const disableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const reset=()=>{
    person0=true;
    enableBoxes();
    winnerDiv.classList.add('hide')
    count=0;
}
const enableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
rest.addEventListener("click",reset);
newGame.addEventListener("click",reset);