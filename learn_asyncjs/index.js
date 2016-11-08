
/**
 * Created by avinashgarg on 8/11/16.
 *
 * exploring async library
 */

//async parallel for executing multiple functions at a same time if any function return error
    //it will thow error

var async = require('async');



var function1 = function(options,callback)
{
    callback(null,"hello1");
}

var function2 = function(options,callback)
{
    callback(null,null);
}

var function3 = function(options,callback)
{
    callback(null,"hello3");
}

var async_stack = [function1,function2,function3];



async.parallel(async_stack,function (err,result) {
    if(err)
    {
        throw err;
    }
    console.log(result);
});




