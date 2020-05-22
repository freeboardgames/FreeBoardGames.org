import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';

export class RpcClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: string },
  );

  newUser(
    request: user_pb.NewUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error, response: user_pb.NewUserResponse) => void,
  ): grpcWeb.ClientReadableStream<user_pb.NewUserResponse>;
}

export class RpcPromiseClient {
  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: string },
  );

  newUser(request: user_pb.NewUserRequest, metadata?: grpcWeb.Metadata): Promise<user_pb.NewUserResponse>;
}
