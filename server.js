const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("abruujuaham");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Sekrver is listening at port ' + (process.env.PORT || 3000));
});