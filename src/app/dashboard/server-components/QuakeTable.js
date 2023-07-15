'use client';

import { renderDate, friendlyCoords, isItStriped } from '../utils/utils';
import useUSGS from '@/app/hooks/useUSGS';

export default function QuakeTable({ qdata, updateMap }) {
  const { quakes, isLoading, isError } = useUSGS();

  let quakeData = [];

  if (isLoading === false) {
    console.log(quakes);
    quakeData = quakes.features;
  }

  const renderQuakes = quakeData.map((quake) => {
    let date = renderDate(quake.properties.updated).toUTCString();
    let friendlyLong = friendlyCoords(quake.geometry.coordinates[0]);
    let friendlyLat = friendlyCoords(quake.geometry.coordinates[1]);
    return (
      <tr key={quake.id} scope='row' className={`cursor-pointer`}>
        <th className='text-left py-2 px-8'>{quake.properties.mag}</th>
        <td className='text-left py-2 px-8'>{quake.properties.place}</td>
        <td className='text-left py-2 px-8'>
          {friendlyLong}, {friendlyLat}
        </td>
        <td className='text-right py-2 px-8'>{date}</td>
      </tr>
    );
  });

  return (
    <div className='absolute bottom-[10px] hover:bottom-[10px] left-[10px] min-h-fit h-1/4 w-3/5 backdrop-blur-sm bg-slate-200/25 overflow-y-auto rounded'>
      <table className='w-full'>
        <thead className='sticky top-0 bg-white text-xs'>
          <tr>
            <th className='text-left px-8 p-2' scope='col'>
              Magnitude
            </th>
            <th className='text-left px-8 p-2' scope='col'>
              General Location
            </th>
            <th className='text-left px-8 p-2' scope='col'>
              Precise Location
            </th>
            <th className='text-center px-8 p-2' scope='col'>
              Approx. Time of Event
            </th>
          </tr>
        </thead>
        <tbody className='text-xs'>{!isLoading && renderQuakes}</tbody>
      </table>
    </div>
  );
}
