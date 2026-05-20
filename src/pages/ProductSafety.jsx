import React from "react";
import LegalLayout from "@/components/brand/LegalLayout";
import { BRAND } from "@/lib/brand";

export default function ProductSafety() {
  return (
    <LegalLayout title="Product Safety Note">
      <p className="text-base">
        {BRAND.name} products are designed for use near water in everyday summer scenarios.
        Please read the following safety guidance carefully.
      </p>

      <h2 className="font-heading text-xl text-ink">Before First Use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Test the pouch with a paper towel or dry tissue before placing your phone inside</li>
        <li>Inspect the closure mechanism carefully</li>
        <li>Familiarize yourself with how to open and seal the pouch</li>
      </ul>

      <h2 className="font-heading text-xl text-ink">During Use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Inspect closure before each use</li>
        <li>Do not use beyond the final stated limits in the product instructions</li>
        <li>Not intended for deep diving unless final product instructions explicitly state otherwise</li>
        <li>Keep sharp objects away from pouch surfaces</li>
        <li>Do not store sharp keys directly against delicate surfaces unless final pouch design allows it</li>
      </ul>

      <h2 className="font-heading text-xl text-ink">After Use</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Rinse with fresh water after salt water exposure</li>
        <li>Rinse after use in chlorinated water</li>
        <li>Allow to dry before storing</li>
      </ul>

      <h2 className="font-heading text-xl text-ink">Important</h2>
      <p>
        No waterproof claim should be treated as unlimited protection. Final product
        instructions prevail over any information presented on this pre-launch website.
        Always follow the care and usage guidance that ships with the product.
      </p>
    </LegalLayout>
  );
}