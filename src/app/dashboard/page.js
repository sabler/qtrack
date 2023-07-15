import MapContainer from './client-components/MapContainer';
import Masthead from './server-components/Masthead';
import QuakeTable from './server-components/QuakeTable';

export default function Dashboard() {
  return (
    <div className='container relative font-sys max-w-full'>
      {/* Some kind of context will go here. Maybe. */}
      <MapContainer />
      <QuakeTable />
      <Masthead />
    </div>
  );
}
