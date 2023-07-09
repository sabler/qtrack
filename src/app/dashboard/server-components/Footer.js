import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex items-center justify-center'>
      <footer className='text-sm text-sky-800 text-center'>
        &copy; 2023 rob sable
        <br />
        made with ❤️ on planet earth <br />
        data provided by the{' '}
        <Link
          className='hover:text-sky-500'
          target='_blank'
          href='https://www.usgs.gov/programs/earthquake-hazards/earthquakes'
        >
          united states geological survey
        </Link>
      </footer>
    </div>
  );
}
