let step1Btn = document.getElementById('step1Btn')
let step2Btn = document.getElementById('step2Btn')
let step3Btn = document.getElementById('step3Btn')
let step4Btn = document.getElementById('step4Btn')
let step2Cont = document.getElementById('step2Cont')
let step3Cont = document.getElementById('step3Cont')
let step4Cont = document.getElementById('step4Cont')
let form = document.getElementById('form')
let oneBtn = document.getElementById('one')
let twoBtn = document.getElementById('two')
let threeBtn = document.getElementById('three')
let fourBtn = document.getElementById('four')
let check = document.getElementById('check')
let titleText = document.getElementById('titleText')
let titleP = document.getElementById('titleP')
let formCont = document.getElementById('formCont')


form.style.display = "flex"
step2Cont.style.display = "none"
step3Cont.style.display = "none"
step4Cont.style.display = "none"



const listenForClick = () =>{

}

step1Btn.addEventListener("click",()=>{

  
 
    form.style.display = "none"
    step2Cont.style.display ="flex"
    oneBtn.classList.remove('active')
    twoBtn.classList.add('active')
    titleText.innerText = "SELECT PLAN"
    titleP.innerText = "YOU HAVE THE OPTION OF MONTHLY OR YEARLY BILLING"

    step2Btn.addEventListener("click",()=>{

        step2Cont.style.display = "none"
        step3Cont.style.display ="flex"
        twoBtn.classList.remove('active')
        threeBtn.classList.add('active')
        titleText.innerText = "PICK ADD-ONS"
        titleP.innerText = "ADD-ONS HELP ENHANCE YOUR GAMING EXPERIENCE"
    

    })

    step3Btn.addEventListener("click",()=>{

        step3Cont.style.display = "none"
        step4Cont.style.display ="flex"
        threeBtn.classList.remove('active')
        fourBtn.classList.add('active')
        titleText.innerText = "FINISHING UP"
        titleP.innerText = "DOUBLE CHECK EVERYTHING BEFORE CONFIRMING"
    

    })
})