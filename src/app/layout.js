import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'EasyLabour',
  description: 'Low-cost trusted services from local labourers like electricians, plumbers & more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
