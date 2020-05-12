import * as jspb from 'google-protobuf';

export class NewUserReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserReq): NewUserReq.AsObject;
  static serializeBinaryToWriter(message: NewUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserReq;
  static deserializeBinaryFromReader(message: NewUserReq, reader: jspb.BinaryReader): NewUserReq;
}

export namespace NewUserReq {
  export type AsObject = {
    name: string;
  };
}

export class NewUserRes extends jspb.Message {
  getJwt(): string;
  setJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: NewUserRes): NewUserRes.AsObject;
  static serializeBinaryToWriter(message: NewUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUserRes;
  static deserializeBinaryFromReader(message: NewUserRes, reader: jspb.BinaryReader): NewUserRes;
}

export namespace NewUserRes {
  export type AsObject = {
    jwt: string;
  };
}
