/**
 * A promise is used as a placeholder for a future value
 */

var promose = new Promise(
    (resolve, reject) => {

    }
)

function asycTask(){
var promise = new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("Action complete");
resolve();
},1000);
});
return promise;
}