const reqEvent = event => require(`../events/${event}`);// zekiarda.xyz
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));// zekiarda.xyz
  client.on('message', reqEvent('message'));// zekiarda.xyz
};
