#!/bin/bash
if [ "$SERVER_TYPE" = "BGIO" ]; then
  yarn run server:bgio
elif [ "$SERVER_TYPE" = "FBG" ]; then
  yarn run server:fbg
else
  yarn run server:both
fi