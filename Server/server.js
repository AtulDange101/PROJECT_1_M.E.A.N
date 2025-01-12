
/**------------------------------------------------------------------- */


express = require('express');
eobj = express();
port = 5100;

eobj.listen(port, function(req,res)
{
  console.log("Marvellous Server is started succesfully");
});


eobj.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  return next();
});

/**------------------------------------------------------ */

const { MongoClient } = require("mongodb");
URL = "mongodb://localhost:27017";
client = new MongoClient(URL);

async function GetConnection()
{
    let Result = await client.connect();
    let db = await Result.db("Marvellous");
    return db.collection("Batches");
}

/**------------------------------------------------------- */


eobj.get('/READ',GetRestuarant);

    async function GetRestuarant(req,res)
    {
        let data = await GetConnection();
        let Result = await data.find().toArray();
        res.send(Result);
    }

/**------------------------------------------------------------------------------ */

    eobj.delete('/DELETE/:Id', DelRestaurant);
    
    async function DelRestaurant(req,res) 
    {
     const { Id } = req.params;
    let data = await GetConnection();
    let result = await data.deleteOne(
        {
            "id": Id 
        }
    );
    return res.send({ message : "Restaurant deleted successfully"});
    };
    
    /**------------------------------------------------------------------------------ */

eobj.use(express.json()); 

eobj.post('/CREATE', InsRestaurant);

async function InsRestaurant(req, res) 

{
    const Ang_data = req.body; 
    let db = await GetConnection();  

     let maxIdDoc = await db.find().sort({ id: -1 }).limit(1).toArray();  
        let newId = 1;

    if (maxIdDoc.length > 0) 
    {
        newId = parseInt(maxIdDoc[0].id) + 1; 
    }

    newId = newId.toString();
    Ang_data.id = newId;

    let result = await db.insertOne(Ang_data);
    res.send(
    {
            message: "Restaurant Inserted successfully" 
    });

}

/**------------------------------------------------------------------------------ */


eobj.use(express.json());             


eobj.put('/UPDATE/:Id', UpdRestaurant);  

async function UpdRestaurant(req, res) {

    const { Id } = req.params;  
    const Ang_data = req.body;  

        
        let data = await GetConnection();
        
        let result = await data.updateOne(
            { "id": Id }, 
            { $set: Ang_data }  
        );
        res.send(
        {
            message: "Restaurant updated successfully"
        });

} 

/**----------------------------------------------------------------------- */





