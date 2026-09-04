import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
};

export default function TextImage({
  title,
  paragraphs,
  image,
  alt,
  imageSide = "right",
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
        </div>
      </div>
      <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
        <h2 className="text-[28px] font-bold leading-tight text-heading sm:text-[32px]">{title}</h2>
        <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-foreground/80">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-heading/40 px-6 py-2.5 text-[15px] font-bold text-heading transition-colors hover:border-heading hover:bg-heading hover:text-white"
          >
            {ctaLabel}
            <svg viewBox="0 0 24 24" className="h-4 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h15m-6-6 6 6-6 6" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
