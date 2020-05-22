// package: rpc
// file: rpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as rpc_pb from "./rpc_pb";
import * as user_pb from "./user_pb";

interface IRpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    newUser: IRpcService_InewUser;
}

interface IRpcService_InewUser extends grpc.MethodDefinition<user_pb.NewUserRequest, user_pb.NewUserResponse> {
    path: string; // "/rpc.Rpc/newUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.NewUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.NewUserRequest>;
    responseSerialize: grpc.serialize<user_pb.NewUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.NewUserResponse>;
}

export const RpcService: IRpcService;

export interface IRpcServer {
    newUser: grpc.handleUnaryCall<user_pb.NewUserRequest, user_pb.NewUserResponse>;
}

export interface IRpcClient {
    newUser(request: user_pb.NewUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
    newUser(request: user_pb.NewUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
    newUser(request: user_pb.NewUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
}

export class RpcClient extends grpc.Client implements IRpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public newUser(request: user_pb.NewUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
    public newUser(request: user_pb.NewUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
    public newUser(request: user_pb.NewUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.NewUserResponse) => void): grpc.ClientUnaryCall;
}
