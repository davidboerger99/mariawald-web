import type { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-[35px] py-14 text-[14px] leading-[24px] [&_h2]:pt-4 [&_h2]:text-[24px] [&_h2]:font-light [&_h2]:text-heading [&_a]:text-accent [&_a]:hover:text-accent-dark">
      {children}
    </div>
  );
}
