#!/bin/bash

OUT_DIR="./"

rm -f ./*.js ./*.ts

PROTOC=../../node_modules/grpc-tools/bin/protoc
SRC_DIR=./
DEST_DIR=./

# generate js codes via grpc-tools
../../node_modules/.bin/grpc_tools_node_protoc \
 --proto_path=${SRC_DIR} \
 --js_out=import_style=commonjs,binary:${DEST_DIR} \
 --grpc_out=${DEST_DIR} \
 --plugin=protoc-gen-grpc=../../node_modules/.bin/grpc_tools_node_protoc_plugin *.proto 

# generate d.ts codes
${PROTOC} \
 --plugin=protoc-gen-ts=../../node_modules/.bin/protoc-gen-ts \
 --ts_out=${DEST_DIR} \
 -I ${SRC_DIR} *.proto
