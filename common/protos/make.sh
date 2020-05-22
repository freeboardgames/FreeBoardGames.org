#!/bin/bash

OUT_DIR="./"

rm -f ./*.js ./*.ts

protoc -I="." *.proto \
--js_out=import_style=commonjs:$OUT_DIR \
--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR