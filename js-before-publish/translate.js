export default (request) => { 
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
    
    console.log("doing the fetch", request.message.text);
    return xhr.fetch(url, http_options).then((res) => {
        request.message.text = res.body;
        request.message.source = 'server';
        return request.ok();
    }).catch((e)=>{
        request.message.text = "an error happened :("
        request.message.source = 'server';
    });
}