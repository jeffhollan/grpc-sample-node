// Modified from https://github.com/grpc/grpc/blob/v1.41.0/examples/node/dynamic_codegen/greeter_client.js
var PROTO_PATH = __dirname + '/../protos/greet.proto';

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).greet;

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target'
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:50051';
  }
  var client = new hello_proto.Greeter(target,
                                       grpc.credentials.createInsecure());
  var user = "Azure Container Apps";
  client.sayHello({name: user}, function(err, response) {
    console.log(response.message);
  });
}

main();