const express=require('express')
const app=express();
const cors=require('cors');

app.use(cors());

const port=process.env.PORT || 5000;

const services=require('./data/services.json');

app.get('/', (req, res) => {
    res.send('Moon Clinic!')
  })

app.get('/services', (req, res) => {
    res.send(services);
  })
app.get('/services/:id', (req, res) => {
  const id=req.params.id;
  const selected_service=services.find(service=>service.id===id)
    res.send(selected_service);
  })

  app.listen(port, () => {
    console.log('Moon Clinic Running on Port',port);
  })