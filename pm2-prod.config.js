module.exports = {
  apps : [{
    name   : "freeboardgame server",
    script : "./server-build/server.js",
    env : {
      "NODE_ENV": "production",
      "PORT": process.env.PORT || 8000
    }
  }]
}
