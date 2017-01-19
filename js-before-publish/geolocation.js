export default (request) => { 
    const pubnub = require('pubnub');
    const kvstore = require('kvstore');
    const xhr = require('xhr');

    console.log(request.meta.clientip); // Log the request envelope passed 
    
    var url = "http://ip-api.com/json/"+request.meta.clientip;
    console.log("sending URL", url);
    return xhr.fetch(url).then((res) => {
        var data = JSON.parse(res.body);
        console.log("result = ", data);
        
        request.message.text = 'Your IP is ' 
          + request.meta.clientip
          + ' and you are in '
          + data.city + ' ' + data.regionName + ', ' + data.country
          + ' and your ISP is ' + data.isp
          + '.';
        request.message.source = 'server';
        
        return request.ok();
    });
}