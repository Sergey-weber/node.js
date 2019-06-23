const http = require('http'),
  port = 4000;

const requestHandler = (request, response) => {
    let = interval = process.argv[2],
    timeout = process.argv[3];

  const inter = setInterval(() => {
    console.info(`Вывод текущей даты и времени - ${new Date().toUTCString()}`);
  }, interval);

  setTimeout(() => {
    clearInterval(inter);
    console.info(
      `Очистка интервала - через - ${timeout}, Время остановки -  ${new Date().toUTCString()}`
    );
  }, timeout);

  response.end('Hello node.js server');
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  err ? console.log(err) : console.log(`Server is listening on ${port}`);
});
