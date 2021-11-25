// Modified from https://github.com/grpc/grpc/blob/v1.41.0/examples/node/dynamic_codegen/greeter_client.js
var PROTO_PATH = __dirname + '/../protos/greet.proto';

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var http = require('http');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).greet;

const hostname = '0.0.0.0';
const port = 8050;
const target = process.env.GRPC_SERVER_ADDRESS || 'localhost:50051';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var client = new hello_proto.Greeter(target,
        grpc.credentials.createInsecure());
    client.sayHello({name: "Azure Container Apps"}, function(err, response) {
        res.end(response.message);
    });
  });
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });