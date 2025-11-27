import Link from 'next/link'

function Header() {
  return (
      <header className="w-full z-50 border-b border-black/10 bg-black/10 backdrop-blur-md fixed top-0 right-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">
              Post Generator
            </span>
          </div>
          <nav className='md:gap-6 gap-3 flex'>
            <Link
            href="/"
            className="hover:text-black transition my-auto"
          >
            Home
          </Link>
          <Link
            href="/postGenerator"
            className="px-3 py-2 rounded-lg bg-amber-300 text-black text-sm font-semibold hover:bg-amber-200 transition shadow-lg"
          >
            Try Now !
          </Link>
          </nav>
          
        </div>
      </header>
  )
}

export default Header
