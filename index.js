// import json-server
const jsonServer=require('json-server')

// create server for running json file[db.json]
const server=jsonServer.create()

// setup route or path for json file[db.json]
const router=jsonServer.router('db.json')

// create middleware
const middleware=jsonServer.defaults()

//create server port number
const PORT=3000

//use middleware, router & port to server
server.use(middleware)
server.use(router)

//run server at given port
server.listen(PORT,()=>{
console. log("Server Running !! ")
})