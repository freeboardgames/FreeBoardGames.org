import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoDir = join(__dirname, '../src/protos');
console.log('protodir', protoDir);
const protoPath = join(__dirname, '../src/protos/rpc.proto');
console.log('protopath', protoPath);

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'rpc',
    // protoPath: join(__dirname, '../../protos/rpc.proto'),
    protoPath,
    loader: {
      keepCase: true,
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      includeDirs: [protoDir],
    },
  },
};
