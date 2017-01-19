export default (request) => { 
    const pubnub = require('pubnub');
    const kvstore = require('kvstore');

    var name = request.message.text;
    console.log('using the name', name);
    kvstore.incrCounter(name,1);
    return kvstore.getCounter(name).then((counter)=>{
        console.log("the counter is",counter);
        request.message.text = counter;
        request.message.source = 'server';
        return request.ok();
    });
}