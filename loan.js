let points = 0;
const accountBalance = 50000;
let Apply = document.getElementById("Apply")

// for Monthly Income

function solveMonthlyIncome(){
let inputField = document.getElementById("awesome");
let MonthlyIncome = document.getElementById("awesome").value;
// let  input = inputField.value
if(MonthlyIncome === ""){
    inputField.style.borderColor = "red"
}else{
annualIncome = MonthlyIncome * 12;

console.log(annualIncome);
return annualIncome
}

}

function requiredLoanAmount(){
    // let RequiredLoan = document.getElementById("LoanAmount");
    let LoanAmount = document.getElementById("LoanAmount").value;
    if(LoanAmount ===""){
        Required.style.borderColor = "red";
        // console.log('hi')
    }else{
        (LoanAmount <= accountBalance)
            points += 10;
    }
    console.log(points);
}

function CrHistory(){
    let HISTORYCR = document.getElementById("HISTORYCR").value;
    
    if(HISTORYCR >=1){
        points += 10;
    
    }
    console.log(points);
}


function lastLoanCollectedDate(){
    let lastLoanCollectedDateValue = document.getElementById("lastloanCollection").value
    let lastLoanCollectedDate = new Date(lastLoanCollectedDateValue);
    let today = new Date;

    let differenceInms = today - lastLoanCollectedDate;
    let differenceInDays = Math.floor(differenceInms/(1000*60*60*24))

    if(differenceInDays > 180){
        points += 10;
    }

    console.log(points);
}


function LastDepositDate(){
    let LastDepositDateValue = document.getElementById("DepositDate").value;
    let userDepositDate = new Date(LastDepositDateValue);
    let today = new Date();
    let differenceInms = today - userDepositDate;

    let differenceInDays = Math.floor(differenceInms/(1000*60*60*24))

    if (differenceInDays <=30){
        points += 5;

    }
    console.log(points);
}

function repaymentTime(){
    let RepaymentPeriod = document.getElementById("RepaymentPeriod");
    let paymentperiod = RepaymentPeriod.value;

    if(paymentperiod == 1){
        points =+ 5;
    }
    console.log(points);
}

function accType(){
    let accountType = document.getElementById("accountType").value
    // if(accountType <= 1){
    //     points =+ 5;
    // }else{
    //         points =+ 10;
        
    // }
    if(accountType = "CURRENT"){
        points + 5;
    
    }else{
        points +10;
    }

    console.log(points)
}

function vicky(){
    solveMonthlyIncome();
    requiredLoanAmount()
    CrHistory();
    lastLoanCollectedDate();
    LastDepositDate();
    repaymentTime();
    accType();

    if (points >= 30){ 
        window.location.href = "balance.html"
    }else{
         alert("Sorry you didn't meet the requirements.Try again later")
    
    }
console.log(points)
}

