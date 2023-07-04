// import MapContainer from './client-components/MapContainer';
import { getAllData } from '../api/mongo';




export default async function Dashboard() {

  const data = await getAllData();
  console.log(data[0].location);


  return (
    <>
      <p>Dashboard</p>
    </>
  );
}
