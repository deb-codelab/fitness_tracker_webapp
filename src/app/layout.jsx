import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 mt-5">{children}</main>
            </div>
          <Footer />
      </body>
    </html>
  );
}
