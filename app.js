import express from "express";
import morgan from "morgan";
import accountsRouter from "./routes/accounts.js";

const port = 3006;
  
const app = express();
app.use(morgan('dev'));

app.use('/accounts',accountsRouter);
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});