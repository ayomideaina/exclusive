import HeroCarousel from "../../../components/layout/HeroCarousel";

const sidebarLinks = [
  "Women's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
  "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty",
];

export default function HeroSection() {
  return (
    <section className="container-app py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
        <nav className="hidden lg:flex flex-col gap-4 border-r border-border-light pr-6">
          {sidebarLinks.map((label) => (
            <a key={label} href="/exploreProductsSection" className="text-sm text-text-primary hover:text-primary">
              {label}
            </a>
          ))}
        </nav>

        <HeroCarousel />
      </div>
    </section>
  );
}
