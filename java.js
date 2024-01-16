let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#restart");
let newgamebtn=document.querySelector("#new-game");
let newGame=document.querySelector(".newgame");
let msg=document.querySelector("#msg");
let header=document.querySelector(".head");
const disble=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}
const enable=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    });
}
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let turnO="true";
boxes.forEach((box)=>{
    box.addEventListener("click",(evt)=>{
   if(turnO=="true"){
    box.innerText="O";
    turnO="false";
   }
   else{
    box.innerText="X";
    turnO="true";
   }
   box.disabled="true";
   checkwinner();
    })
})
const checkwinner=()=>{
    for(let pattern of winPattern) {
        let pattern1=boxes[pattern[0]].innerText;
        let pattern2=boxes[pattern[1]].innerText;
        let pattern3=boxes[pattern[2]].innerText;
    if(pattern1 !="" && pattern2!="" && pattern3 != ""){
            if(pattern1==pattern2 &&pattern3==pattern2){
             console.log("Checking the winner...");
             newGame.setAttribute("class","newgame");
             msg.innerText=`Congratulations!! Winner is ${pattern1}`;
             header.setAttribute("class","hide");
             turnO="true";
             disble();
            }
        }
    }         
};
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    })
    turnO="true";
    enable();
})
newgamebtn.addEventListener("click",(event)=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
    newGame.setAttribute("class","newgame hide");
    header.setAttribute("class","head");
    turnO="true";
    enable();
})

