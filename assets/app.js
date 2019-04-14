// Initialize Firebase
var config = {
apiKey: "AIzaSyA-e69zvapN8gjNsWRYkxOrKaC7omaeLZI",
authDomain: "rps-multiplayer-2df20.firebaseapp.com",
databaseURL: "https://rps-multiplayer-2df20.firebaseio.com",
projectId: "rps-multiplayer-2df20",
storageBucket: "rps-multiplayer-2df20.appspot.com",
messagingSenderId: "782642512578"
};
firebase.initializeApp(config);

var db = firebase.database()
var pLScore=0;
var pRScore=0;
var pLName;
var pRName;
var pL=false;
var pR=false;

var chat = $("#chat");
var chatDisplay = $("#chatDisplay");

var message = $("#message").text()
console.log(message);
db.ref('message').set({
    message : message,
});

//need to put 
$("#submitChat").on("click", function(){
    var newLi = $("<li>");
    var content = $("#chatInput").val().trim();
    newLi.append(content);
    $("#chat").prepend(newLi);
    $("#chatInput").val("");
});

$("#pLSubmitName").on("click", function() {
    var nm = $("<h2>");
    pLName = $("#pLInput").val().trim();
    nm.text(pLName);
    $("#pLName").append(nm);
    db.ref('users/pL').set({
        pLName : pLName,
        pLSelection : "",
    });
    
    $("#pLInput").val("");
    $("#pLNameInput").hide();
    $("#pRNameInput").hide();
    pL = true;
    if (pR) {
        startGame();
    }
});

$("#pRSubmitName").on("click", function() {
    var nm = $("<h2>");
    var pRName = $("#pRInput").val().trim();
    nm.text(pRName);
    $("#pRName").append(nm);
    db.ref('users/pR').set({
        pRName : pRName,
        pRSelection : "",
    });
    $("#pRInput").val("");
    $("#pRNameInput").hide();
    $("#pLNameInput").hide();
    pR = true;
    if (pL) {
        startGame();
    }
});

const startGame = function() {
    console.log(db.ref(message/message);)
}
// $(".img").on("click", function() {


// }
