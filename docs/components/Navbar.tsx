import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  showSidebarToggle?: boolean;
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
}

export function Navbar({ showSidebarToggle, onSidebarToggle, isSidebarOpen }: NavbarProps) {
  const location = useLocation();
  const isDocs = location.pathname.startsWith('/docs');

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4 relative">
          {/* Mobile hamburger - Absolutely positioned so it does not shift the flex container */}
          {showSidebarToggle && (
            <button
              onClick={onSidebarToggle}
              className="lg:hidden absolute left-0 p-2 -ml-2 rounded-lg hover:bg-surface-raised transition-colors text-text-secondary cursor-pointer z-10"
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isSidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}

          <Link 
            to="/" 
            className={`flex items-center gap-2 group shrink-0 transition-all ${showSidebarToggle ? 'pl-10 lg:pl-0' : ''}`}
          >
            <motion.img
              src="/logo.svg"
              alt="tiktiktoast logo"
              className="w-8 h-8 drop-shadow-md shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
            <span className="text-lg font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors">
              TikTiktoast
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {isDocs ? (
            <Link to="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Home
            </Link>
          ) : (
            <Link to="/docs" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Docs
            </Link>
          )}
          
          <a
            href="https://www.npmjs.com/package/tiktiktoast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            npm ↗
          </a>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
