// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_NewUserRequest(arg) {
  if (!(arg instanceof user_pb.NewUserRequest)) {
    throw new Error('Expected argument of type user.NewUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_NewUserRequest(buffer_arg) {
  return user_pb.NewUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_NewUserResponse(arg) {
  if (!(arg instanceof user_pb.NewUserResponse)) {
    throw new Error('Expected argument of type user.NewUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_NewUserResponse(buffer_arg) {
  return user_pb.NewUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RpcService = exports.RpcService = {
  newUser: {
    path: '/rpc.Rpc/newUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.NewUserRequest,
    responseType: user_pb.NewUserResponse,
    requestSerialize: serialize_user_NewUserRequest,
    requestDeserialize: deserialize_user_NewUserRequest,
    responseSerialize: serialize_user_NewUserResponse,
    responseDeserialize: deserialize_user_NewUserResponse,
  },
};

exports.RpcClient = grpc.makeGenericClientConstructor(RpcService);
