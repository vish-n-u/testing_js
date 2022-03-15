function returnData(res) {
    return "hey !!"
}

let dataResponse = returnData()
console.log("without callback >>> ", dataResponse);


function returnTimeout(res) {
    setTimeout(function () {
        return "hey !!"
    }, 1000);
}

let timeoutResponse = returnTimeout()
console.log("timeout Response >>> ", timeoutResponse)

function returnTimeoutInCallback(callback) {
    setTimeout(function () {
        callback("hey !!")
    }, 1000)
}

returnTimeoutInCallback(function (res) {
    console.log("Timeout in callback >>> ", res)
});


function promiseTimeout(){

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("hey !!");
        },1000);
    })
}

let promiseResponse = promiseTimeout();

promiseResponse.then(res =>{
    console.log("promise response >>> ",res);
})

