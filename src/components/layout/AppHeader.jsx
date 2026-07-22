import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import AccountDropdown from "./AccountDropdown";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const requireAuth = (e) => {
    if (!user) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <header className="border-b border-border-light relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-text-primary">
            Exclusive
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-text-primary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          {!user && (
            <Link to="/signup" className="text-sm text-text-primary hover:text-primary">
              Sign Up
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center bg-background-light rounded px-4 py-2 w-48 md:w-64">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="bg-transparent text-sm outline-none flex-1 min-w-0"
            />
            <Search className="w-4 h-4 text-text-muted shrink-0" />
          </div>

          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            aria-label={isSearchOpen ? "Close search" : "Open search"}
            aria-expanded={isSearchOpen}
            className="sm:hidden text-text-primary"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link to="/wishlist" aria-label="Wishlist" className="relative" onClick={requireAuth}>
            <Heart className="w-5 h-5 text-text-primary hover:text-primary" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative" onClick={requireAuth}>
            <ShoppingCart className="w-5 h-5 text-text-primary hover:text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <AccountDropdown />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden text-text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex items-center bg-background-light rounded px-4 py-2 w-full">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              autoFocus
              className="bg-transparent text-sm outline-none flex-1 min-w-0"
            />
            <Search className="w-4 h-4 text-text-muted shrink-0" />
          </div>
        </div>
      )}

      {isMenuOpen && (
        <nav className="md:hidden border-t border-border-light px-4 py-4 flex flex-col gap-4 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-text-primary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          {!user && (
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-text-primary hover:text-primary"
            >
              Sign Up
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
