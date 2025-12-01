import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 filter backdrop-blur-sm w-full bg-(--pure-black)/90 shadow-lg/40 border-b border-(--pure-graphite) text-(--pure-white) z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 max-md:px-4">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/codevista.jpg"
            alt="CodeVista Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <h1 className="text-xl font-medium tracking-wider hover:text-(--solar-sky) transition">
            CodeVista
          </h1>
        </Link>

        <nav className="flex gap-6 text-sm">
          <a href="/#features" className="transition">
            Features
          </a>
          <a href="/#mission" className="transition">
            Mission
          </a>
          <a href="/#cta" className="transition">
            Start
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
