import MapContainer from './client-components/MapContainer';
import Footer from './server-components/Footer';
import QuakeTable from './server-components/QuakeTable';

export default function Dashboard() {
  return (
    <main>
      <div className='container font-sys max-w-full'>
        <MapContainer />
      </div>
      <Footer />
    </main>
  );
}
