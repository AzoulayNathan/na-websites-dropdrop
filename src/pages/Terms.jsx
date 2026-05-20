import React from "react";
import LegalLayout from "@/components/brand/LegalLayout";
import { BRAND } from "@/lib/brand";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use">
      <h2 className="font-heading text-xl text-ink mt-0">Pre-Launch Website</h2>
      <p>
        This website is a pre-launch platform for {BRAND.name}. No products are currently
        available for purchase. Checkout functionality is not active.
      </p>

      <h2 className="font-heading text-xl text-ink">Content Subject to Change</h2>
      <p>
        All product descriptions, images, pricing, materials and specifications shown on
        this website are preliminary and subject to change before the first drop.
      </p>

      <h2 className="font-heading text-xl text-ink">Product Information</h2>
      <p>
        Product information presented on this website is under validation. Final materials,
        certifications and testing results will be confirmed before checkout opens.
      </p>

      <h2 className="font-heading text-xl text-ink">No Purchase Obligations</h2>
      <p>
        Joining the waitlist or completing the survey does not constitute a purchase
        commitment. You will have the option to buy when checkout launches.
      </p>

      <h2 className="font-heading text-xl text-ink">Final Terms</h2>
      <p>
        Complete terms of sale and purchase conditions will be published before the
        first drop becomes available for checkout.
      </p>
    </LegalLayout>
  );
}