import { MongoClient } from 'mongodb';

const uri = process.env.NEXT_MDB_XSTRING
const client = new MongoClient(uri);


export async function getAllData() {
  const listofQuakes = [];

  try {
    await client.connect();
    const db = client.db("usgs");
    const collection = db.collection('earthquakes');
    const cursor = collection.find();
    // const eqCollection = cursor;

    for await (const quake of cursor) {
      //console.log(quake.location);

      let currentQuake = {
        timestamp: quake.timestamp,
        location: quake.location,
        url: quake.url
      }
      listofQuakes.push(currentQuake);

    }

    return listofQuakes;

  } finally {

    client.close();
    //console.log(listofQuakes);
    // return listofQuakes;



  }

}

