const express = require('express');
const userRouter = require('./routers/userRoute');

const app = express();

app.use('/api', userRouter);

app.listen(8000, ()=> console.log(`Server is running in port 8000`));