let homeScoreEl = document.getElementById("home_score");
let guestScoreEl = document.getElementById("guest_score");
let home = 0
let guest = 0


function homeOnePoint(){
home += 1;
homeScoreEl.innerText = home;

}
function homeTwoPoints(){
    home += 2;
    homeScoreEl.innerText = home;
}
function homeThreePoints(){
    home += 3;
    homeScoreEl.innerText = home;
}
function guestOnePoint(){
 guest += 1;
 guestScoreEl.innerText= guest;
}
function guestTwoPoints(){
    guest += 2;
    guestScoreEl.innerText= guest;
}
function guestThreePoints(){
    guest += 3;
    guestScoreEl.innerText= guest;
}
function reset(){
    homeScoreEl.innerText = 0;
    home = 0
    guest = 0
    guestScoreEl.innerText = 0;
}


