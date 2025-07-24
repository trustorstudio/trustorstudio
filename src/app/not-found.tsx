import Image from "next/image";
import Link from "next/link";
import { publicRouters } from "~/constants/routers";
import { images } from "~/public/images";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full gap-1 bg-[#13161b]">
      <Image src={images.logo} alt="Logo Not Found" width={260} className="animate-pulse" priority />

      <h1 className="text-2xl font-bold text-white">404 - Page Not Found</h1>
      <p className="text-sm text-[#8e97a8] text-center max-w-50">Sorry, the page you are looking for does not exist.</p>

      <Link
        href={publicRouters.home}
        className="mt-4 inline-flex items-center gap-2 rounded border border-white/30 bg-gray-800/50 px-4 py-2 text-sm font-medium text-white shadow transition hover:border-white/50 hover:bg-gray-700/50"
      >
        Back to Home
      </Link>
    </div>
  );
}
