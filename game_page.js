player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_q").innerHTML="Question turn - "+player1_name;
document.getElementById("player_a").innerHTML="Answer turn - "+player2_name;

function send(){
    
    number_1=document.getElementById("number1").value;
    number_2=document.getElementById("number2").value;
    actual_answer=parseInt(number_1)*parseInt(number_2);

    question_word="<h4 id='word_display'>"+number_1+ "x"+number_2+"</h4>";
    input_box="<br> Answer: <input type='text'id='input_checkbox'>";
    check_btn="<br> <br> <button class='btn btn-info'onclick='check()'>Check</button>";
    row=question_word+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}

question_turn="player_1";
answer_turn="player_2";
function check(){
get_answer=document.getElementById("input_checkbox").value;

if(get_answer==actual_answer){
if(answer_turn=="player_1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;

}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}

if(question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_q").innerHTML="Question turn - "+player2_name;

}
else{
    question_turn="player_1";
    document.getElementById("player_q").innerHTML="Question turn - "+player1_name;
}
if(answer_turn=="player_1"){
    answer_turn="player_2";
    document.getElementById("player_a").innerHTML="Answer turn - "+player2_name;

}
else{
    answer_turn="player_1";
    document.getElementById("player_a").innerHTML="Answer turn - "+player1_name;
}

document.getElementById("output").innerHTML="";

}
