import Header from "../component/Header";
import Footer from "../component/Footer";
import HomeBanner from "../component/HomeBanner";
import BusinessType from "../component/BusinessType";
import WhyChoose from "../component/WhyChoose";



export default function HomePage() {
  return (
    <div className="h-auto">
      <Header />
      <HomeBanner />
      <BusinessType />
      <WhyChoose />
      <Footer />
    </div>
  );
}
