import { useRef, useEffect } from "react";
import { User, Settings, Package, XCircle, Star, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Toggle from "../Toggle";
import useAuth from "../../hooks/useAuth";
import withAuth from "../../hocs/withAuth";

const menuItems = [
  { label: "Manage My Account", icon: Settings, to: "/account" },
  { label: "My Order", icon: Package, to: "/orders" },
  { label: "My Cancellations", icon: XCircle, to: "/cancellations" },
  { label: "My Reviews", icon: Star, to: "/reviews" },
];

function AccountDropdown() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Toggle
      render={(open, toggle) => (
        <DropdownBody open={open} toggle={toggle} logOut={logOut} navigate={navigate} />
      )}
    />
  );
}


function DropdownBody({ open, toggle, logOut, navigate }) {
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && containerRef.current && !containerRef.current.contains(e.target)) {
        toggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, toggle]);

  const handleLogout = async () => {
    await logOut();
    toggle();
    navigate("/");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={toggle}
        aria-label="Account menu"
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"
      >
        <User className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-10 w-52 bg-white rounded shadow-dropdown border border-border-light py-2 z-20">
          {menuItems.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              onClick={toggle}
              className="flex items-center gap-3 px-4 py-2 text-sm text-text-primary hover:text-primary"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-text-primary hover:text-primary"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default withAuth(AccountDropdown, { fallback: null });
