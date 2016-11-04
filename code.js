/**
 * Created by josh on 11/4/16.
 */


// a simple JQuery like function to get elements by ID
function $(id) { return document.getElementById(id);  }


function appendMessage(msg) {
    $('history').innerHTML += "<p class='"+msg.source+"'>"+msg.text+"</p>"
    $('history').scrollTop = $('history').scrollHeight;
}


var pubnub = new PubNub({
    subscribeKey: "sub-c-9198529e-a2cd-11e6-9fcd-0619f8945a4f",
    publishKey:   "pub-c-7d74808f-de74-4272-9f7f-5b0b6cea9a4a"
});


var TARGET_CHANNEL = 'geolocation';

//add listener for message events
pubnub.addListener({
    message: function(evt) {
        console.log(evt.message);
        appendMessage(evt.message);
    }
});
//subscribe to channel
//pubnub.subscribe({channels:['chatbot-simple']});
pubnub.subscribe({channels:['filter','translate','geolocation']});

//send the message
$('message').addEventListener('keypress',function(evt) {
    if(evt.keyCode == 13) sendMessage();
});
$('message').focus();
$('send').addEventListener('click', sendMessage);



function sendMessage() {
    var msg = {
        source:'user',
        text: $('message').value
    };
    pubnub.publish({
        channel:TARGET_CHANNEL,
        message: msg
    });
    $('message').value = '';
    $('message').focus();
    appendMessage(msg);
}