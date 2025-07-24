import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Project({
  image,
  action,
  title,
  author,
  datetime,
  slug,
}: {
  title: string;
  image: string | StaticImageData;
  action: string;
  author: string;
  datetime: string;
  slug: string;
}) {
  return (
    <div className="rounded-sm text-card-foreground px-5 py-3 group relative overflow-hidden border border-white/20 bg-gray-800/50 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-white/40 hover:shadow-2xl">
      <Link className="block" href={`/blog/${slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            alt={title}
            loading="lazy"
            width="800"
            height="400"
            decoding="async"
            data-nimg="1"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ color: "transparent" }}
            src={"/images/landings/01.png"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/30">
              {action}
            </span>
          </div>
          <h2 className="mb-4 text-xl font-bold text-white transition-colors duration-200 group-hover:text-blue-300 lg:text-2xl">{title}</h2>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className="font-mono">{datetime}</span>
              <span>by {author}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 transition-colors duration-200 group-hover:text-blue-300">
              <span className="text-xs font-medium">Read More</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
