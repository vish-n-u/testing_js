function marks(){
    return 97
}



let promise = new Promise((resolve,reject) =>{
    
    let success = marks()
    if(success > 80){
        data = "Successfully called"
        resolve(data)
        resolve(data)
        
    }
    else{
        data = "there is an error"
        reject(data)
    }

})

//console.log(Object.getOwnPropertyNames(promise))
promise
.then(
    function(bata){
        console.log("it was success")
        console.log(bata)
        return "wow!"
    }
    
)
.then(
    function (bata){
        console.log(bata,"what a day")
    }
)
.catch(
    function(data){
    console.error("It failed")
    console.log(data)
}
)
// .finally(
//     function(data){
//         console.log(data,"It doesnt matter")
//     })