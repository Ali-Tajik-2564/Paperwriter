import React from 'react';
import ServiceBox from './ServiceBox/ServiceBox';

export default function BestService() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-between my-8 px-4 ">
      <span className="w-5/12 h-auto text-2xl font-bold tracking-wide text-center">
        Here is Why We are the Best Paper Writing Service for Students
      </span>
      <div className="w-full flex flex-wrap justify-between  p-4 space-x-4 space-y-8 ">
        <ServiceBox
          title="Zero AI Guaranteed"
          desc="Our writers create high-quality papers with customized content without using any AI tools like ChatGPT. You even get a free AI detection report from us, or pass it through an AI detector yourself and return it if AI is detected."
          icon="Zero-Ai"
        />
        <ServiceBox
          title="On-Time Delivery"
          desc="Short deadlines are no problem, and we guarantee delivery by your specified deadline. Nobody beats our quality with 12-24-36-hour turnarounds. You also get a 100% money-back guarantee of timely delivery with us!"
          icon="On-Time"
        />
        <ServiceBox
          title="Unlimited Revision & Edits"
          desc="We have a 98% customer satisfaction rate because we provide unlimited FREE edits and rewrites after delivery. Just give us your notes for any changes when we submit your work, and we’ll rewrite it until you are satisfied."
          icon="Unlimited"
        />
        <ServiceBox
          title="Private & Confidential"
          desc="We are reliable because we NEVER reveal your identity or personal information to any 3rd parties. We’re committed to protecting your privacy and confidential information, whether it's your information or your assignment data."
          icon="Private"
        />
        <ServiceBox
          title="Online Order Tracking"
          desc="Your account on our website gives you exclusive access to your order details and the progress of your writing project. We also send you regular updates through text and email to keep you in the loop."
          icon="Online"
        />
        <ServiceBox
          title="Friendly Customer Support Team"
          desc="Professional experts are standing by 24/7 to answer questions, solve problems, and guarantee your satisfaction. We’re always available via text message, email, or online chat to resolve client queries."
          icon="Friendly"
        />
      </div>
    </div>
  );
}
