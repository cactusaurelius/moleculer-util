module.exports = {
  nodeID: "node-1",
  logger: true,
  internalServices: {
    $node: {
      actions: {
        // Call as `$node.hello`
        hello(ctx) {
          //   const broker = this.broker;
          return ctx.call("$node.list").then((nodes) => {
            return Promise.all(
              nodes.map((node) => {
                return ctx.call("$node.health", {}, { nodeID: node.id });
              })
            );
          });
        },
      },
    },
  },
};
