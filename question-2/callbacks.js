const resolvedPromise =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({'message':'delayed success!'})
        }, 500)
    })
}
const rejectedPromise =()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject({'error': 'delayed exception!'})
        }, 500)
    })
}

var run={
    callResolved: async ()=>{
        await resolvedPromise().then((data)=>console.log(data))
    },
    callRejected: async ()=>{
        await rejectedPromise().then((data)=>console.log(data)).catch((data)=>console.log(data))
    }
}

run.callResolved()
run.callRejected()