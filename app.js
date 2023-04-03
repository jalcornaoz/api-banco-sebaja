import express from "express";
import morgan from "morgan";
// eslint-disable-next-line
import accounts from "./routes/accounts.json" assert {type:"json"};

const port = 3010;
  
const app = express();
app.use(morgan('dev'));

app.get('/accounts',(req, res)=>{
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(accounts));
});
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});