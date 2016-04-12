const net = require('net');
const fs = require('fs');
const port = process.env.PORT || 5000;

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    fs.writeFile(__dirname + '/writeout-texts/' + new Date() + '.txt', data, (error) => {
      if (error) throw error;
      process.stdout.write('\nwritten unique .txt');
      socket.end();
    });
  });
});

server.listen(port, () => {
  process.stdout.write('Server listening on 5000');
});

exports.server = server;
