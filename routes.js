const userController = require("./controllers/userController")

const _routes=['users', userController]
const routes= (app)=>{
    _routes.forEach(route=>{
        const [url, controller] = route
        app.use(`/api/${url}`, controller)
    })
}
module.exports = routes