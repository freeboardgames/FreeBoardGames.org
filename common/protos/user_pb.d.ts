import * as jspb from 'google-protobuf';

export class NewUserRequest extends jspb.Message {
  getNickname(): string;
  setNickname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserRequest): NewUserRequest.AsObject;
  static serializeBinaryToWriter(message: NewUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserRequest;
  static deserializeBinaryFromReader(message: NewUserRequest, reader: jspb.BinaryReader): NewUserRequest;
}

export namespace NewUserRequest {
  export type AsObject = {
    nickname: string;
  };
}

export class NewUserResponse extends jspb.Message {
  getJwtpayload(): string;
  setJwtpayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserResponse): NewUserResponse.AsObject;
  static serializeBinaryToWriter(message: NewUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserResponse;
  static deserializeBinaryFromReader(message: NewUserResponse, reader: jspb.BinaryReader): NewUserResponse;
}

export namespace NewUserResponse {
  export type AsObject = {
    jwtpayload: string;
  };
}
