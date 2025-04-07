import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
