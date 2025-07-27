import BestService from '@/components/templates/BestService/BestService';
import Landing from '@/components/templates/landing/landing';
import ReviewSection from '@/components/templates/Review/ReviewSection/ReviewSection';

export default function Home() {
  return (
    <div className="w-full p-0 m-0">
      <Landing />
      <ReviewSection />
      <BestService />
    </div>
  );
}
