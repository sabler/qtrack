export default function QuakeTable({ qdata, updateMap }) {
  const renderDate = (stamp) => {
    return new Date(stamp);
  };

  const isItStriped = (index) => {
    let calculation = index % 2 == 0;
    console.log(calculation);

    return calculation;
  };

  const renderQuakes = qdata.map((quake, idx) => {
    let stripeState = isItStriped(idx);
    let stripeClass = stripeState ? 'bg-zinc-800 ' : '';

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
        className={`${stripeClass}cursor-pointer hover:bg-sky-500 hover:text-zinc-800`}
      >
        <th scope='row' className='text-left px-8 py-2'>
          {quake.properties.mag}
        </th>
        <td className='px-8 py-2'>{quake.properties.place}</td>
        <td className='px-8 py-2'>
          {quake.geometry.coordinates[0]}, {quake.geometry.coordinates[1]}
        </td>
        <td className='px-8 py-2'>{date}</td>
      </tr>
    );
  });
  console.log(qdata);
  return (
    <div className='basis-2/3 m-8 h-96 overflow-y-auto'>
      <table className='w-full h-96 border-gray-600 table-auto text-left'>
        <thead className='rounded-t-lg bg-slate-700 sticky top-0 uppercase text-xs text-sky-200'>
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

        <tbody className='h-96 overflow-y-auto text-sm text-sky-500'>
          {renderQuakes}
        </tbody>
      </table>
    </div>
  );
}
