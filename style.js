console.log("This is Your Dice Game")

document.addEventListener("DOMContentLoaded",()=>{
    const dice = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;']


    let form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()

let rollButton = document.querySelector('#start-game')
        let num = 0;
        let array = []
        let input = document.querySelector('input')
        let inputValue = input.value;
        
    rollButton.addEventListener("click",(e)=>{
        // para.innerHTML= ""
        // diceDiv.appendChild(para)
        for(let i = 1;i<=inputValue;i++){ 
        e.preventDefault()
        let para = document.createElement("p")
        let diceDiv = document.getElementById("dice-para")
        let history = document.querySelector("ul")
        let sum = document.getElementById("total-sum")
        let createLi = document.createElement("li")
        
        
        
        
        
       
      let random = Math.floor(Math.random()* 6) 
    
        if(random ===1){
            para.innerHTML= dice[0] 
            num +=1
            array.push(dice[0])
            array.map((e)=>{createLi.innerHTML += e })
            }else if(random ===2){
                para.innerHTML= dice[1] 
                num +=2
                array.push(dice[1])
            array.map((e)=>{createLi.innerHTML += e })
            }else if(random ===3){
                para.innerHTML= dice[2] 
                num +=3
                array.push(dice[2])
            array.map((e)=>{createLi.innerHTML += e })
            }else if(random ===4){
                para.innerHTML= dice[3] 
                num +=4
                array.push(dice[3])
            array.map((e)=>{createLi.innerHTML += e })
            }else if(random ===5){
                para.innerHTML= dice[4] 
                num +=5
                array.push(dice[4])
            array.map((e)=>{createLi.innerHTML += e})
            }else{para.innerHTML= dice[5] 
                num +=6 
                array.push(dice[5])
            array.map((e)=>{createLi.innerHTML += e })
                }
            
        // console.log(num)
        diceDiv.appendChild(para)
        createLi.innerHTML += `=${num}`
        history.appendChild(createLi)
        sum.textContent = `Sum = ${num}`;
            }
            
    })
   
       

})
})