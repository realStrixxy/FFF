function LogIn() {
    var username = document.getElementById("unameinput").value;
    var password = document.getElementById("pswinput").value;

    if(username == "FFF1" | username == "FFF2" | username == "FFF3") {
        if(password == "FFF") {
            window.location = "fffpanel.html";
        } else {
            alert("Invalid Password!");
        }
    } else {
        alert("Invalid Username!");
    }
}

function NotAffiliated(){
    let notA = confirm("You are not affiliated with the FFF?");
    if(notA) {
        alert("Please leave the site immediately!");
        window.close();
    } else {
        alert("Please log in!");
        window.location = "LogIn.html";
    }
}

function Donate() {
    window.open("http://www.paypal.me/realStrixxy", "PayPal");
}

function OnCommentSubmit() {
    //Shows Comment On Screen
    var comment = document.getElementById("CommentInput").value;
    let commentDiv = document.getElementById("CommentDiv");
    let newComment = document.createElement("h2");
    newComment.textContent = comment;
    commentDiv.appendChild(newComment);

    //Get From LS
    var storedComments = JSON.parse(localStorage.getItem("Comments")) || [];

    //Store In LS
    var NewestComment = 
    {
        "Comment": comment
    };

    storedComments.push(NewestComment);

    localStorage.setItem("Comments", JSON.stringify(storedComments));
}

function LoadComments() {
    var Comments = JSON.parse(localStorage.getItem("Comments")) || [];
    let commentDiv = document.getElementById("CommentDiv");

    for(let comment in Comments){ 
        let newComment = document.createElement("h2");
        let divider = document.createElement("hr");
        divider.classList.add("Divider2");
        newComment.textContent = Comments[comment].Comment;
        commentDiv.appendChild(newComment);
        commentDiv.appendChild(divider);
    }
}