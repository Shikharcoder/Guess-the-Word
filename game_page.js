var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);
    
    charat1 = word.charAt(1);
    console.log(charat1);
    
    len_div_2 = Math.floor(word.length / 2);
    charat2 = word.charAt(len_div_2);
    console.log(charat2);
    
    len_min_1 = Math.floor(word.length - 1);
    charat3 = word.charAt(len_min_1);
    console.log(charat3);
    
    remove_carat1 = word.replace(charat1, " _ ");
    remove_carat2 = remove_carat1.replace(charat2, " _ ");
    remove_carat3 = remove_carat2.replace(charat3, " _ ");
    console.log(remove_carat3);
    
    q_word = "<h4 id='word_dis'> Q. " + remove_carat3 + "</h4>";
    i_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_b = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = q_word + i_box + check_b;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in Lower Case " + answer);
    
    if (answer == word) {
        if (answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
    } else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
    } else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}