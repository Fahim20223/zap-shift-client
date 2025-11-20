import React from "react";

const Questions = () => {
  return (
    <div className="mt-15">
      <h2 className="text-center text-secondary font-bold text-4xl">
        Frequently Asked Question (FAQ)
      </h2>
      <div className="mt-8">
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold">
            How does this posture corrector work?
          </summary>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </summary>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </summary>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Questions;
