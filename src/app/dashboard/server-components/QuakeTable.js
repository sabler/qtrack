import { getAllData } from '../../db/mongo';

export default async function QuakeTable() {
  const quakes = await getAllData();
  const renderQuakes = quakes.map((quake) => {
    return (
      <tr className="border-b border-gray-600">
        <th scope="row" className="text-left pr-6 py-4">0.0</th>
        <td className="pr-6 py-4">32 Miles From Nowhere</td>
        <td className="pr-6 py-4">50.000 150.000</td>
        <td className="pr-6 py-4">Smarch 32, 2023</td>
      </tr>

    )


  })

  return (
    <table className='table-auto text-left'>
      <thead className="bg-slate-700 font-roboto text-sm text-sky-200">
        <tr>
          <th className="pr-6 py-2" scope="col">Magnitude</th>
          <th className="pr-6 py-2" scope="col">General Location</th>
          <th className="pr-6 py-2" scope="col">Precise Location</th>
          <th className="pr-6 py-2" scope="col">Approx. Time of Event</th>
        </tr>
      </thead>

      <tbody className="text-sm text-sky-500">

        {/* <th scope="row" className="text-left pr-6 py-4">0.0</th>
          <td className="pr-6 py-4">32 Miles From Nowhere</td>
          <td className="pr-6 py-4">50.000 150.000</td>
          <td className="pr-6 py-4">Smarch 32, 2023</td> */}
        {renderQuakes}

      </tbody>

    </table >

  )
  //
}