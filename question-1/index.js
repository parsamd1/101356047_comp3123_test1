function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject)=>{
        if(mixedArray.length>0){
            let i=0
            while(i !== mixedArray.length){
                if (typeof mixedArray[i] === "string"){
                    mixedArray[i]=mixedArray[i].toLowerCase()
                    i++
                }
                else {
                    mixedArray.splice(i,1)
                }
            }
            resolve("The array is filtered now")
        }
        else {
            reject("The array is empty")
        }
    })
}

myArray=['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(myArray).then((data)=>console.log(data))
console.log(myArray)