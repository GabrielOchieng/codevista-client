const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full text-center py-6 text-xs text-(--pure-white) bg-(--pure-black) z-20">
      © {new Date().getFullYear()} CodeVista. Crafted by @Gabriel
    </footer>
  );
};

export default Footer;
