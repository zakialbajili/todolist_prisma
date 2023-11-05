class _response{
    sendResponse = async (res, data)=>{
        try{
            if(data.code){
                res.status(data.code)
                delete data.code

                res.send(data)
                return true
            }
            res.status(data && data.status ? 200:400)
            res.send(data)
        }catch(error){
            console.error('sendResponse response helpers error', error)
            res.status(400).send({
                status: false,
                error
            })
            return false
        }
    }
}