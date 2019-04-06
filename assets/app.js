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

var chat = $("#chat");
var chatDisplay = $("#chatDisplay");

$("#submitChat").on("click", function(){
    var newLi = $("<li>");
    var content = $("#chatInput").val().trim();
    newLi.append(content);
    $("#chat").append(newLi);
})

$("#pLSubmitName").on("click", function() {
    var nm = $("<h2>");
    var content = $("#pLInput").val().trim();
    nm.text(content);
    $("#pLName").append(nm);
    db.ref('users/pL').set({
        pLName : content
    });
    $("#pLInput").val("");
})

$("#pRSubmitName").on("click", function() {
    var nm = $("<h2>");
    var content = $("#pRInput").val().trim();
    nm.text(content);
    $("#pRName").append(nm);
    db.ref('users/pR').set({
        pRName : content
    });
    $("#pRInput").val("");

})

$(".img").on("click", function() {
    

})
