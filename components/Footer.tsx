import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pb-6 xl:pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex max-w-md flex-col gap-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex justify-center items-center text-2xl gap-2"
            >
              <img
                alt="logo"
                decoding="async"
                data-nimg="1"
                className="w-10 h-auto"
                src="/images/logo.png"
              />
              Ethereal
            </Link>
          </div>
          <p className="opacity-60">
            Empowering businesses with innovative solutions. Let&apos;s create
            something amazing together.
          </p>
        </div>
        <p className="opacity-60">©2025 Ethereal. All Rights Reserved</p>
      </div>
    </footer>
  );
}
