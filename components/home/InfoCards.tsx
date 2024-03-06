import { HoverEffect } from "../ui/card-hover-effect";
import { info } from "@/constants";

export function InfoCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={info} />
    </div>
  );
}
