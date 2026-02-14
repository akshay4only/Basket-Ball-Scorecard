let homeScore = 0;
let homeScoreEl = document.getElementById("HOME");
let homeBtnOne = document.getElementById("home-btn-1");
let homeBtnTwo = document.getElementById("home-btn-2");
let homeBtnThree = document.getElementById("home-btn-3");

let guestScore = 0;
let guestScoreEl = document.getElementById("GUEST");

let guestBtnOne = document.getElementById("guest-btn-1");
let guestBtnTwo = document.getElementById("guest-btn-2");
let guestBtnThree = document.getElementById("guest-btn-3");


homeBtnOne.addEventListener("click",function(){
    homeScore += 1;
    
    homeScoreEl.textContent =homeScore;
})

homeBtnTwo.addEventListener("click",function(){
    homeScore += 2;
    
    homeScoreEl.textContent =homeScore;
})
homeBtnThree.addEventListener("click",function(){
    homeScore += 3;
    
    homeScoreEl.textContent =homeScore;
})
// ----------------------------------------------------

guestBtnOne.addEventListener("click",function(){
    guestScore += 1;
    
    guestScoreEl.textContent =guestScore;
})

guestBtnTwo.addEventListener("click",function(){
    guestScore += 2;
    
    guestScoreEl.textContent =guestScore;
})
guestBtnThree.addEventListener("click",function(){
    guestScore += 3;
    
    guestScoreEl.textContent =guestScore;
})

// Reset button-----------------------------------------------
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click",function(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent =homeScore;
    guestScoreEl.textContent =guestScore;
})



