npm list -g | grep moleculer-cli || npm install -g moleculer-cli

curl -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/cactusaurelius/moleculer-util/develop/configs/moleculer.config.js --output moleculer.config.js
# Use $NAMESPACE $TRANSPORTER evironment variables
moleculer call "\$node.knwtHealth" --transporter nats --ns sea --config moleculer.config.js
rm moleculer.config.js 


# RAW replace github with raw.githubusercontent and delete /blob
# curl -H 'Cache-Control: no-cache' https://raw.githubusercontent.com/cactusaurelius/moleculer-telegram/main/src/Telegram.ts --output ./commands/ready.js
# moleculer connect nats --ns sea --commands ./commands/*.js

