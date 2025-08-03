import BestService from '@/components/templates/BestService/BestService';
import Landing from '@/components/templates/landing/landing';
import OfferedSection from '@/components/templates/OfferedSection/OfferedSection';
import ReviewSection from '@/components/templates/Review/ReviewSection';
import WritersReviewSection from '@/components/templates/WritersReview/WritersReviewSection/WritersReviewSection';

export default function Home() {
  return (
    <div className="w-full p-0 m-0">
      <Landing />
      <WritersReviewSection />
      <BestService />
      <OfferedSection />
      <ReviewSection />
    </div>
  );
}
