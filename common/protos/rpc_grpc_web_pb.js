/**
 * @fileoverview gRPC-Web generated client stub for rpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

const grpc = {};
grpc.web = require('grpc-web');

var user_pb = require('./user_pb.js');
const proto = {};
proto.rpc = require('./rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rpc.RpcClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rpc.RpcPromiseClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.NewUserRequest,
 *   !proto.user.NewUserResponse>}
 */
const methodDescriptor_Rpc_newUser = new grpc.web.MethodDescriptor(
  '/rpc.Rpc/newUser',
  grpc.web.MethodType.UNARY,
  user_pb.NewUserRequest,
  user_pb.NewUserResponse,
  /**
   * @param {!proto.user.NewUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  user_pb.NewUserResponse.deserializeBinary,
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.NewUserRequest,
 *   !proto.user.NewUserResponse>}
 */
const methodInfo_Rpc_newUser = new grpc.web.AbstractClientBase.MethodInfo(
  user_pb.NewUserResponse,
  /**
   * @param {!proto.user.NewUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  user_pb.NewUserResponse.deserializeBinary,
);

/**
 * @param {!proto.user.NewUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.NewUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.NewUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rpc.RpcClient.prototype.newUser = function (request, metadata, callback) {
  return this.client_.rpcCall(
    this.hostname_ + '/rpc.Rpc/newUser',
    request,
    metadata || {},
    methodDescriptor_Rpc_newUser,
    callback,
  );
};

/**
 * @param {!proto.user.NewUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.NewUserResponse>}
 *     A native promise that resolves to the response
 */
proto.rpc.RpcPromiseClient.prototype.newUser = function (request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + '/rpc.Rpc/newUser',
    request,
    metadata || {},
    methodDescriptor_Rpc_newUser,
  );
};

module.exports = proto.rpc;
