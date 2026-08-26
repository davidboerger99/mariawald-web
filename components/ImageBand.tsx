import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  title?: string;
  href?: string;
};

export default function ImageBand({ src, alt, title, href }: Props) {
  const inner = (
    <div className="relative h-[440px] w-full">
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      {title && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <h1
            className="text-[36px] font-light text-white"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,.5)" }}
          >
            {title}
          </h1>
        </div>
      )}
    </div>
  );
  return href ? (
    <Link href={href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}
