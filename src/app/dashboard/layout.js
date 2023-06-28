import '../globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Futzing with Mapbox',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-sys'>{children}</body>
    </html>
  );
}
