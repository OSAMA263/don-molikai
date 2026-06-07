import "./globals.css";
import Header from "@/components/layout/header";
import SmoothScroll from "@/components/layout/smooth-scroll";
import Footer from "@/components/layout/footer";
import PageTransition from "@/components/layout/page-transition";


export const metadata = {
  title: {
    default: "Molikai",
    template: "%s | Molikai",
  },
  description:
    "Discover delicious food made with quality ingredients. Explore our products, learn our story, and enjoy flavors crafted for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full`}>
      <body className="min-h-full text-red">
        <Header />

        <SmoothScroll>
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
        </SmoothScroll>

        <Footer />
      </body>
    </html>
  );
}
