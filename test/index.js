process.on('unhandledRejection', function(err){
  throw err
})

require('./rpc')
require('./logs')