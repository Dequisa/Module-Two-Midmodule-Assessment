console.log("This is Your Dice Game")

document.addEventListener("DOMContentLoaded",()=>{
    const dice = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;']


    let form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()

let rollButton = document.querySelector('#start-game')
        let num = 0;
        let array = []
        let totSum = [];
        
    rollButton.addEventListener("click",(e)=>{
        
       
        e.preventDefault()
        let para = document.getElementById("dice")
        let diceDiv = document.getElementById("dice-para")
        let history = document.querySelector("ul")
        let sum = document.getElementById("total-sum")
        let createLi = document.createElement("li")
        let input = document.querySelector('input')
        let inputValue = input.value;
        
        for(let i = 1;i<=inputValue;i++){ 
      let random = Math.floor(Math.random()* 6) 
    
        if(random ===1){
            // para.innerHTML+= dice[0]
            totSum.push(dice[0])
            num +=1
            array.push(dice[0])
            }else if(random ===2){
                // para.innerHTML+= dice[1]
                totSum.push(dice[1]) 
                num +=2
                array.push(dice[1])
            }else if(random ===3){
                // para.innerHTML+= dice[2] 
                totSum.push(dice[2]) 
                num +=3
                array.push(dice[2])
            }else if(random ===4){
                // para.innerHTML+= dice[3]
                totSum.push(dice[3])  
                num +=4
                array.push(dice[3])
            }else if(random ===5){
                // para.innerHTML+= dice[4]
                totSum.push(dice[4])  
                num +=5
                array.push(dice[4])
            }else{
                // para.innerHTML+= dice[5]
                totSum.push(dice[5])  
                num +=6 
                array.push(dice[5])
                }
        // sum.textContent = `Sum = ${num}`;
        
            }
            sum.textContent = `Sum = ${num}`;
            para.innerHTML=" "
            totSum.map((e)=>{para.innerHTML += e })
            diceDiv.appendChild(para)
            para.parentNode.replaceChild(para, para)
            // diceDiv.appendChild(para)
            console.log(diceDiv)
            console.log(para.innerHTML)
             array.map((e)=>{createLi.innerHTML += e })
        createLi.innerHTML += `=${num}`
        history.appendChild(createLi)
        array=[]
        totSum=[]
        num=0;
        
           

    })
    
    
    
   
       

})
})