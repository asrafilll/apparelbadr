import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/hero_bg.png"}
          alt="hero_bg"
          width={5000}
          height={400}
          className="z-0"
        />
      </div>
      <div className="px-16 absolute top-5 w-screen">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={60}
            className="z-10"
          />
          <div className="flex gap-14 mr-20">
            <Link href={"#home"} className="text-white">
              Home
            </Link>
            <Link href={"#catalogue"} className="text-white">
              Catalogue
            </Link>
            <Link href={"#contact"} className="text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-36">
          <h1 className="font-playFair text-white text-6xl">New Release '23</h1>
          <p className="text-neutral-400 text-sm mt-2 leading-relaxed w-2/5">
            Jelajahi koleksi eksklusif muslim modern yang menggabungkan tradisi
            dan gaya kontemporer untuk kegiatan sehari-hari
          </p>
          <Link
            href={"#contact"}
            className="bg-white px-8 py-3 rounded-lg mt-4 text-sm inline-block"
          >
            Cek Katalog
          </Link>
        </div>
      </div>
    </div>
  );
};
