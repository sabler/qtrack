import MapContainer from './client-components/MapContainer';
import QuakeTable from './server-components/QuakeTable';

export default function Dashboard() {
  return (
    <section>
      <div className='container my-16 max-w-full'>
        <MapContainer />
      </div>
    </section>
  );
}
