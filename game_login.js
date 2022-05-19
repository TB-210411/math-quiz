function add_user(){
    player1=document.getElementById("player_1").value;
    player2=document.getElementById("player_2").value;
    if(player1.length==0 || player2.length==0){
document.getElementById("player_1").placeholder="UserName required";
document.getElementById("player_2").placeholder="UserName required";
    }
    else{
        localStorage.setItem("player1",player1);
        localStorage.setItem("player2",player2);
        window.location="game_page.html";
    }
    }
    