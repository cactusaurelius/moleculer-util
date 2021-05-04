module.exports = {
  command: "health",
  description: "Ping Registered nodes",
  action(broker) {
    return broker.ping().then((nodes) => {
      for (const [nodeID, ping] of Object.entries(nodes)) {
        (!ping && broker.logger.error(`Node: ${nodeID} Is not responding`)) ||
          broker.logger.info(
            `Node: ${nodeID} responded after ${ping.elapsedTime} ms`
          );
      }
    });
  },
};
