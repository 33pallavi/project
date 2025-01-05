let boxes=document.querySelectorAll(".box")
let turnO=true
let win=document.querySelector("#two")
let winpattern =[[0,1,2],
                    [0,3,6],
                      [0,4,8],
                        [1,4,7],
                         [2,4,6],
                         [2,5,8],
                          [3,4,5],
                            [6,7,8]]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerHTML="O"
            turnO=false
        }
        else{
            box.innerHTML="X"
            turnO=true
        }
        box.disabled=true
        checkwinner()
     })
})
const  checkwinner=()=>{
    for(let pattern of winpattern)
    {
        let pos1=boxes[pattern[0]].innerHTML
        let pos2=boxes[pattern[1]].innerHTML
        let pos3=boxes[pattern[2]].innerHTML
        if(pos1 !=""  && pos2!=""  && pos3!= "")
        {
            if(pos1===pos2  && pos2===pos3 ){
                win.innerHTML=pos1+=" is winner"
                for(let box of boxes){
                    box.disabled=true
                }
        }
    }
} 
}