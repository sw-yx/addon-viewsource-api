exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "hello world"
  });
};
