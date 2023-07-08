import QuakeTable from './server-components/QuakeTable';


export default function Dashboard() {
  return (

    <section className="flex h-screen content-center items-center place-content-center">
      <QuakeTable />
    </section>

  );
}
