const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5050
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware
app.use(cors())
app.use(bodyParser.json())


const uri = `mongodb+srv://${process.env.S1_USER}:${process.env.S2_PASS}@cluster0.azyqnnz.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, } });

async function run() {
  try {
    const database = client.db("coffce").collection("data");
    // how to get data
    app.get("/coffce", async (req, res) => {
      const query = {}
      const user = database.find(query)
      const result = await user.toArray()
      res.send(result)
    })
    // how to post data
    app.post("/coffce", async (req, res) => {
      const bodydata = req.body
      console.log(bodydata)
      const result = await database.insertOne(bodydata)
      res.send(result)
    })
    // delete
    app.delete("/coffce/:id", async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await database.deleteOne(query)
      res.send(result)
    })
// routing
app.get("/coffce/:id",async(req,res)=>{
    const id=req.params.id
    const query={_id:new ObjectId(id)}
    const result=await database.findOne(query)
    res.send(result)
})
// data update
app.put("/coffce/:id",async(req,res)=>{
    const bodydata=req.body
    console.log(bodydata)
    const id=req.params.id
    const query={_id:new ObjectId(id)}
    const options = { upsert: true };
    const updateDoc = {
        $set: {
          name:bodydata.name,
          quantity:bodydata.quantity,
          supperlier:bodydata.supperlier,
          chif:bodydata.chif,
           category:bodydata.category,
           details:bodydata.details,
           photo:bodydata.photo,
            tasle:bodydata.tasle,
        },
      };
    const result=await database.updateOne(query,updateDoc,options)
    res.send(result)
})

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello data")
})

app.listen(port, () => {
  console.log(`Server run successfull ${port}`)
})
