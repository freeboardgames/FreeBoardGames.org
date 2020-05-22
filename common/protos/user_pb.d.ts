// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NewUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewUserRequest): NewUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewUserRequest;
    static deserializeBinaryFromReader(message: NewUserRequest, reader: jspb.BinaryReader): NewUserRequest;
}

export namespace NewUserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class NewUserResponse extends jspb.Message { 
    getJwtpayload(): string;
    setJwtpayload(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewUserResponse): NewUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewUserResponse;
    static deserializeBinaryFromReader(message: NewUserResponse, reader: jspb.BinaryReader): NewUserResponse;
}

export namespace NewUserResponse {
    export type AsObject = {
        jwtpayload: string,
    }
}

export class User extends jspb.Message { 
    getNickname(): string;
    setNickname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        nickname: string,
    }
}
