'use client';

import { renderDate, isItStriped } from '../utils/utils';
import useUSGS from '@/app/hooks/useUSGS';

export default function QuakeTable({ qdata, updateMap }) {
  const { quakes, isLoading, isError } = useUSGS();

  let quakeData = [];

  if (isLoading === false) {
    console.log(quakes);
    quakeData = quakes.features;
  }

  const renderQuakes = quakeData.map((quake) => {
    return (
      <tr key={quake.id} className={`cursor-pointer`}>
        <th scope='row' className='text-left px-8'>
          {quake.properties.mag}
        </th>
        <td className='px-8'>{quake.properties.place}</td>
        <td className='px-8'>
          {quake.geometry.coordinates[0]}, {quake.geometry.coordinates[1]}
        </td>
        <td className='px-8'>date</td>
      </tr>
    );
  });

  // const renderQuakes = qdata.map((quake, idx) => {
  //   let stripeState = isItStriped(idx);
  //   let stripeClass = stripeState ? 'bg-zinc-800 ' : '';
  //   let date = renderDate(quake.properties.updated).toUTCString();

  //   return (
  //     <tr
  //       onClick={() =>
  //         updateMap(
  //           quake.geometry.coordinates[0],
  //           quake.geometry.coordinates[1]
  //         )
  //       }
  //       key={quake.id}
  //       className={`${stripeClass}cursor-pointer hover:bg-sky-500 hover:text-zinc-800`}
  //     >
  //       <th scope='row' className='text-left px-8'>
  //         {quake.properties.mag}
  //       </th>
  //       <td className='px-8'>{quake.properties.place}</td>
  //       <td className='px-8'>
  //         {quake.geometry.coordinates[0]}, {quake.geometry.coordinates[1]}
  //       </td>
  //       <td className='px-8'>{date}</td>
  //     </tr>
  //   );
  // });

  return (
    <div className='absolute bottom-10 left-10 h-1/3 overflow-y-scroll'>
      <table>
        <tbody className='text-xs'>{!isLoading && renderQuakes}</tbody>
      </table>
    </div>
  );
}
