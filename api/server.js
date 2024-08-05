const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('db.json')
const middlewares = jsonserver.defaults()

server.use(middlewares)
server.use(jsonserver.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))

server.use(router)

server.listen(3000, ()=>{
    console.log('JSON server is running');
})

module.exports = server