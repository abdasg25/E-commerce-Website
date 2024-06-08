import express from 'express';
import connectToMongo from '../DatabaseConnection/index.js';
const app = express();

app.get('/',(req,res)=>{
    res.send('server is running here')
});
connectToMongo();
const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
