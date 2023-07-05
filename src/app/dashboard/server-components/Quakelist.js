import { render } from 'react-dom';
import { getAllData } from '../../db/mongo';
import QuakeItem from './QuakeItem';

export default async function Quakelist() {

  const quakes = await getAllData();




  const renderQuakes = quakes.map((quake) => {
    return (
      <>
        {/* <p>{quake.magnitude}</p>
        <p>{quake.mapLocation.lat}</p>
        <p>{quake.mapLocation.lng}</p> */}

        <QuakeItem mag={quake.magnitude} lat={quake.mapLocation.lat} lng={quake.mapLocation.lng} />

      </>
    )
  })

  return (
    <menu>
      {renderQuakes}
    </menu>
  )
}