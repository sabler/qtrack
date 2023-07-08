export default function QuakeTable({ qdata, updateMap }) {
  const renderDate = (stamp) => {
    return new Date(stamp);
  };

  const renderQuakes = qdata.map((quake) => {
    let date = renderDate(quake.properties.updated).toUTCString();
    return (
      <tr
        onClick={() =>
          updateMap(
            quake.geometry.coordinates[0],
            quake.geometry.coordinates[1]
          )
        }
        key={quake.id}
        className='border-b border-gray-700 last:border-none hover:bg-slate-900 cursor-pointer'
      >
        <th scope='row' className='text-left px-8 py-4'>
          {quake.properties.mag}
        </th>
        <td className='px-8 py-4'>{quake.properties.place}</td>
        <td className='px-8 py-4'>
          {quake.geometry.coordinates[0]} {quake.geometry.coordinates[1]}
        </td>
        <td className='px-8 py-4'>{date}</td>
      </tr>
    );
  });
  console.log(qdata);
  return (
    <div className='basis-2/3 border m-8 overflow-hidden rounded-lg border-gray-700'>
      <table className='w-full border-gray-600 table-auto text-left'>
        <thead className='rounded-2xl bg-slate-700 font-roboto text-sm text-sky-200'>
          <tr>
            <th className='px-8 py-2' scope='col'>
              Magnitude
            </th>
            <th className='px-8 py-2' scope='col'>
              General Location
            </th>
            <th className='px-8 py-2' scope='col'>
              Precise Location
            </th>
            <th className='px-8 py-2' scope='col'>
              Approx. Time of Event
            </th>
          </tr>
        </thead>

        <tbody className='text-sm text-sky-500'>{renderQuakes}</tbody>
      </table>
    </div>
  );
}
