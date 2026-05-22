import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  link,
  img,
  className,
}: {
  link: string;
  img: string;
  className?: string;
}) {
  return (
    <div
      className={`w-fit h-[60dvh] rounded-4xl overflow-hidden hover:scale-110 transition-all duration-500 ${className ?? ""}`}
    >
      <Link
        className="size-full"
        href={link}
        aria-label="products link"
      >
        <Image src={img} width={380} height={200} alt={link} />
      </Link>
    </div>
  );
}
