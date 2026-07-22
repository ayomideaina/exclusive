import { Send } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import Button from "../AppButton";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 px-12 py-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="text-sm">Subscribe</p>
          <p className="text-sm text-gray-400">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded px-3 py-2 w-full max-w-[220px]">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-transparent text-sm outline-none flex-1 placeholder:text-gray-400"
            />
            <button aria-label="Subscribe">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="text-sm text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Account</h3>
          {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((label) => (
            <a key={label} href="#" className="text-sm text-gray-400 hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Quick Link</h3>
          {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map((label) => (
            <a key={label} href="#" className="text-sm text-gray-400 hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
          <div className="flex gap-3">
            <div className="w-20 h-20 bg-white" />
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="bg-black text-white border-gray-600">
                Google Play
              </Button>
              <Button variant="outline" size="sm" className="bg-black text-white border-gray-600">
                App Store
              </Button>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <FaFacebookF className="w-4 h-4" />
            <FaTwitter className="w-4 h-4" />
            <FaInstagram className="w-4 h-4" />
            <FaLinkedinIn className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-4">
        © Copyright Rimel 2026. All right reserved
      </div>
    </footer>
  );
}
