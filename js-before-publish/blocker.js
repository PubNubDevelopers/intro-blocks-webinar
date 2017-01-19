export default (request) => { 
    const pubnub = require('pubnub');
    const kvstore = require('kvstore');
    const xhr = require('xhr');
    //kvstore.set('blocked_list',{}); console.log("CLEARED");

    return kvstore.get('blocked_list').then(blocked => {
        blocked = blocked || {};
        const clientip = request.meta.clientip;
        if (clientip in blocked) {
            console.log("already blocked. delete");
            return userBlocked(request);
        }

        var text = request.message.text;
        if(text.indexOf('poop') >= 0) {
            blocked[clientip] = { uuid: request.params.uuid, text:text }
            kvstore.set('blocked_list', blocked, 1);
            return userBlocked(request);
        }
        request.message.source = 'server';
        return request.ok();
    }).catch(e => console.error(e));
    
    function userBlocked(request) {
        request.message.text = 'BLOCKED';
        request.message.blocked = true;
        request.message.source = 'server';
        return request.ok();
    }
}