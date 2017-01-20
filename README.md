# intro-blocks-webinar

Code for the [Intro to Blocks](https://www.pubnub.com/developers/webinars/2016-11-11-introduction-to-pubnub-blocks/) video class.


The files `chat.html` and `code.js` contain the chat interface. The real work is done by the BLOCK code
in the `js-before-publish` directory. You will need to copy this code into your own BLOCK
on the [PubNub website](https://admin.pubnub.com/).

# Getting Started

To run this code, first I suggest you watch a recording of the Intro to Blocks video class, then
follow these steps:


* create your [free PubNub account](https://admin.pubnub.com/#/register) if you don't have one already, 
then log into the [admin console](https://admin.pubnub.com/).

* create an app and select the *Demo Keyset

* copy down the publish and subscribe keys

* scroll down and make sure *PUBNUB BLOCKS* is enabled for this keyset.

* select *BLOCKS* from the left hand sidebar and create a new block

* create a new event handler called `filter` with the channel name `filter` and the event type 
`Before Publish or Fire`.

* in the new filter event handler paste the code from `js-before-publish/filter.js`

* save the code and start the block

* change the 'Test Payload` json to `{ "text":"hello mister foo" }`

* press the 'publish' button and you will see in the console that the text was changed from 
`hello mister foo` to `hello mister bar`. Yay! Your first PubNub BLOCK is running!

* now open the local file `code.js` in your editor and change the subscribeKey & publishKey to 
your keys that you saved earlier from the *Demo Keyset*.

* open the local file `chat.html` and type `hello mister foo` into the input box at the bottom. 
You will see `hello mister bar` in the scrollback. Congratulations, your local program is 
communicating with your block in the PubNub network.

* Now create new event handlers each for `blocker`,`geolocation`,`translate`, and `voting`; and 
paste in the other code from the `js-before-publish` directory.

* in the chat page you can switch which channel you are talking to with the dropdown in the lower
 left.
 
 
* Your new BLOCKS powered app is ready. You can learn more about how BLOCKS works and creating 
your own blocks in the [PubNub BLOCKS Tutorial](https://www.pubnub.com/docs/blocks/introduction)








