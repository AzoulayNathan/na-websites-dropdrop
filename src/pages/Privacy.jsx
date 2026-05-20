import React from "react";
import LegalLayout from "@/components/brand/LegalLayout";
import { BRAND } from "@/lib/brand";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2 className="font-heading text-xl text-ink mt-0">Data We Collect</h2>
      <p>Through the {BRAND.name} pre-launch website, we may collect:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Email address (via waitlist signup)</li>
        <li>Country and use case preferences (via waitlist and survey)</li>
        <li>Survey responses (product preferences, style, pricing)</li>
        <li>Contact form submissions (name, email, message)</li>
        <li>Basic analytics data (page views, interaction events)</li>
      </ul>

      <h2 className="font-heading text-xl text-ink">How We Use Your Data</h2>
      <p>Your data is used to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Send product launch updates and testing notes</li>
        <li>Shape the first drop based on collective survey data</li>
        <li>Respond to contact enquiries</li>
        <li>Improve the website experience</li>
      </ul>

      <h2 className="font-heading text-xl text-ink">Email Marketing</h2>
      <p>
        By joining the waitlist, you consent to receiving product updates and launch
        information from {BRAND.name}. You can unsubscribe at any time.
      </p>

      <h2 className="font-heading text-xl text-ink">Analytics</h2>
      <p>
        We may use analytics tools to understand how visitors interact with the website.
        Analytics tracking IDs will be configured before public launch.
      </p>

      <h2 className="font-heading text-xl text-ink">Data Deletion</h2>
      <p>
        To request deletion of your data, contact us at {BRAND.email}.
      </p>

      <h2 className="font-heading text-xl text-ink">Contact</h2>
      <p>
        For any privacy-related questions, reach out to {BRAND.email}.
      </p>
    </LegalLayout>
  );
}