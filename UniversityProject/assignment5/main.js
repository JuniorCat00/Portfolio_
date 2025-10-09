window.onload = welcomeText;
function welcomeText(){
    var welcomeToPage = document.getElementById("top").innerHTML = "Welcome to Forum";
    alert(welcomeToPage)
}

var count = 1;
function postFunction(){
    var message = document.getElementById("message").value;
    if(count == 1){
        var id_topic = document.getElementById("topic");
        id_topic.innerHTML = message;
    }else if(count == 2){
        var id_reply1 = document.getElementById("reply1");
        id_reply1.innerHTML = message;
    }else if(count == 3){
        var id_reply2 = document.getElementById("reply2");
        id_reply2.innerHTML = message;
    }else if(count >= 4){
        alert("You reaching limit")
        return;
    }else{
        alert("Error")
        return;
    }
    count++
    document.getElementById("message").value = "";
}

function clearFunction(){
    count = 1;
    document.getElementById("message").value = "";
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
}