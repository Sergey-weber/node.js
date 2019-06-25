const http = require('http')
const port = 4000;
  
let inter = undefined

const requestHandler = (request, response) => {
    let = interval = process.argv[2],
    timeout = process.argv[3],
    sumInterval = 0
  
    inter && clearInterval(inter)
    console.log(inter)

  inter = setInterval(() => {
    console.info(`Вывод текущей даты и времени - ${new Date().toUTCString()}`);
    sumInterval += parseInt(interval)
    if(sumInterval > timeout) {
      clearInterval(inter);
    
      console.info(
      `Очистка интервала - через - ${timeout}, Время остановки -  ${new Date().toUTCString()}`)
    }
  }, interval)

  response.end(new Date().toUTCString());
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  err ? console.log(err) : console.log(`Server is listening on ${port}`);
});