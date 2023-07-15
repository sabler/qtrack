import Link from 'next/link';

export default function Masthead() {
  return (
    <div className='absolute z-30 top-0 left-0'>
      <div className='flex items-center justify-center mt-2'>
        <aside className='text-xs text-black text-left'>
          <div className='border-r-[1px] border-black inline w-fit px-2'>
            made with ❤️ on planet earth
          </div>{' '}
          <div className='inline w-fit px-1'>
            data courtesy of the{' '}
            <Link
              className='hover:text-sky-500'
              target='_blank'
              href='https://www.usgs.gov/programs/earthquake-hazards/earthquakes'
            >
              u.s. geological survey
            </Link>
          </div>
          <div className='px-2'>&copy; 2023 rob sable</div>
        </aside>
      </div>
    </div>
  );
}
