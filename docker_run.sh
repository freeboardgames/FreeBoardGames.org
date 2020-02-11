#!/bin/bash
if [ "$SERVER_TYPE" = "BGIO" ]; then
  yarn run start:bgio
elif [ "$SERVER_TYPE" = "WEB" ]; then
  NODE_ENV=production yarn run start:server
fi
