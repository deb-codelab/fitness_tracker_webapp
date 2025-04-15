import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Providers } from "./providers";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Providers>
          <Header />
              <div className="d-flex flex-column min-vh-100 pt-2">
                <main className="flex-grow-1 mb-0">{children}</main>
              </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
