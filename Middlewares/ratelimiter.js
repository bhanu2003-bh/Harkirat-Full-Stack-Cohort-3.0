const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Needed to parse JSON body

let st = new Set();

// Reset the set every second (rate-limiting window)
setInterval(() => {
  st.clear();
}, 1000);

app.use((req, res, next) => {
  if (st.size > 5) {
    return res.status(429).json({  // 429 = Too Many Requests
      message: "Too many requests! Please try again later."
    });
  } else {
    st.add(req.body.userid || req.ip); // fallback to IP if no userid
    next(); // continue to route
  }
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
