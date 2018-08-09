module.exports = {
  apps : [{
    name   : "turnato server",
    script : "./dist/server.js",
    env : {
      "NODE_ENV": "production",
      "PORT": 8001
    }
  }]
}
