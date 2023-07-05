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


    for await (const quake of cursor) {
      let currentQuake = {
        timestamp: quake.timestamp,
        location: quake.location,
        magnitude: quake.magnitude,
        mapLocation: {
          lat: quake.mapLocation.lat,
          lng: quake.mapLocation.lng
        },
        url: quake.url
      }
      listofQuakes.push(currentQuake);

    }
    // console.log(listofQuakes);
    return listofQuakes;


  } finally {
    client.close();
  }

}


export async function getSpecificData() {
  // coming soon
}

