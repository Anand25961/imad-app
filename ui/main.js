//counter code
var button=document.getElementById('counter');
button.onclick=function()
{
    //make a request to counter endpoints
    
    //capture the response
    
    //render the variable in correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.InnerHTML=counter.toString();
};