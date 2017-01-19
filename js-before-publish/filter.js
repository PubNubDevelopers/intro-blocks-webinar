export default (request) => { 
    if(request.message.text.indexOf("badword")>=0) {
        console.log("it's  bar message");
        //request.message.text = "*****";
        //request.message.status = "blocked";
        return request.reject();
    }
    request.message.text = request.message.text.replace(/foo/g,"bar");
    request.message.source = 'server';
    console.log('after',request); // Log the request envelope passed 
    return request.ok(); // Return a promise when you're done 
}