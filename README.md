# intro-blocks-webinar
code for the intro to blocks webinar




simple stream filter

chat interface.  send a message, my message imediately goes into the view, response comes back.


export default (request) => { 
    const pubnub = require('pubnub');
    const query = require('codec/query_string');
    const xhr = require('xhr');
    const basicAuth = require('codec/auth');

    var cred = {
        "url": "https://gateway.watsonplatform.net/language-translation/api",
        "password": "i8wm8e5mlT01",
        "username": "fee6cf06-2d25-4a4d-bfb0-d988dc8bd908"
    }
    const http_options = {
        method:'GET',
        headers:{
            'Authorization': basicAuth.basic(cred.username, cred.password),
        }
    }
        

    var url = cred.url+'/v2/translate'+'?'+query.stringify({
        source:'en',
        target:'fr',
        text:request.message.text
    });
    pubnub.publish({channel:'chatbot-translate-out',message:{account:'user',text:request.message.text}});
    return xhr.fetch(url, http_options).then((x) => {
        pubnub.publish({channel:'chatbot-translate-out',message:{account:'chatbot', text:x.body}});
        return request.ok();
    });

}