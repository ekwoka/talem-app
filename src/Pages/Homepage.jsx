import AccessSection from '../Components/AccessSection';
import BodyDescription from '../Components/BodyDescription';
import CallToAction from '../Components/CallToAction';
import DetailsFree from '../Components/DetailsFree';
import Footer from '../Components/Footer';
import HeroMain from '../Components/HeroMain';
import TestInfinity from '../Components/TestInfinity';

export default function Homepage() {
  return (
    <>
      <HeroMain />
      <BodyDescription />
      <DetailsFree />
      <TestInfinity />
      <AccessSection />
      <CallToAction />
      <Footer />
    </>
  );
}
