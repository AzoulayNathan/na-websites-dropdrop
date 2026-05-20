import React from "react";
import LegalLayout from "@/components/brand/LegalLayout";
import { BRAND } from "@/lib/brand";

export default function ShippingReturns() {
  return (
    <LegalLayout title="Shipping & Returns">
      <h2 className="font-heading text-xl text-ink mt-0">Checkout Status</h2>
      <p>
        Checkout is not yet open. {BRAND.name} is in pre-launch.
        Shipping and returns policies will be finalized before the first drop.
      </p>

      <h2 className="font-heading text-xl text-ink">Expected Launch Countries</h2>
      <p>
        The first drop is being prepared for {BRAND.launchCountries}.
        Additional countries may follow based on demand and logistics.
      </p>

      <h2 className="font-heading text-xl text-ink">Shipping Terms</h2>
      <p>
        Shipping rates, delivery times and carrier partners will be confirmed before
        checkout opens. Waitlist members will be notified of final shipping details.
      </p>

      <h2 className="font-heading text-xl text-ink">Returns Policy</h2>
      <p>
        A returns and exchange policy will be published before the first sale.
        We aim to offer a fair returns process aligned with EU consumer protection standards.
      </p>
    </LegalLayout>
  );
}