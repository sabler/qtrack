import { getAllData } from '../../db/mongo';
import QuakeItem from './QuakeItem';

export default async function Quakelist() {

  const quakes = await getAllData();
  const renderQuakes = quakes.map((quake) => {
    return (
      <>
        <QuakeItem mag={quake.magnitude} lat={quake.mapLocation.lat} lng={quake.mapLocation.lng} />
      </>
    )
  })

  return (
    <menu>
      <div className="text-slate-500 divide-y divide-dashed divide-slate-800">
        {renderQuakes}
      </div>
    </menu>
  )
}