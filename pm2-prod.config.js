module.exports = {
  apps : [{
    name   : "freeboardgame server",
    script : "./dist/server.js",
    env : {
      "NODE_ENV": "production",
      "PORT": 8001
    }
  }]
}
