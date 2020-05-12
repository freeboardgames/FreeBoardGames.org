/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web';

import { NewUserReq, NewUserRes } from './user_pb';

export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: string };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: string },
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoNewUser = new grpcWeb.AbstractClientBase.MethodInfo(
    NewUserRes,
    (request: NewUserReq) => {
      return request.serializeBinary();
    },
    NewUserRes.deserializeBinary,
  );

  newUser(
    request: NewUserReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: NewUserRes) => void,
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/user.UserService/NewUser',
      request,
      metadata || {},
      this.methodInfoNewUser,
      callback,
    );
  }
}
