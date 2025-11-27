import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black/90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-white/60">
        <span>
          © {new Date().getFullYear()} Prompt Booter. All rights reserved.
        </span>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/mtahatalebi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/MohammadTahaTalebi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </Link>

          <Link
            href="https://t.me/MohammadTahaTalebi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
