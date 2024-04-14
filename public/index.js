// const express = require('express');
// const exphbs = require('express-handlebars');
// const session = require('express-session');
const http = require('http');

// const app = express();
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Send the response body "Hello World"
  res.end('Hello World!');
})

// app.engine('handlebars', exphbs({ extname: '.handlebars' }));
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.static(('public')));

// app.use(session({
//     secret: 'dyno dog',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))

// app.use(routes);

server.listen(PORT, () => console.log(`Listening on port http://localhost${PORT}`));

// const http = require('http');

// Create a server object
// const server = http.createServer((req, res) => {
//   // Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // Send the response body "Hello World"
//   res.end('Hello World!');
// });

// // Listen on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// })
