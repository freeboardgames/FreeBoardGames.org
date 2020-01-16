#!/bin/bash
if [ "$SERVER_TYPE" = "BGIO" ]; then
  node bgio/dist/server_bgio.js 
elif [ "$SERVER_TYPE" = "WEB" ]; then
  NODE_ENV=production yarn run start
fi