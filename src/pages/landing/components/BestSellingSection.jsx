import SectionHeader from "../../../components/layout/SectionHeader";
import AppCard from "../../../components/AppCard";
import Button from "../../../components/AppButton";
import { bestSellingProducts } from "../../../data/mockData";

export default function BestSellingSection() {
  return (
    <section className="container-app section">
      <SectionHeader eyebrow="This Month" title="Best Selling Products" action={<Button variant="primary">View All</Button>} />

      <div className="product-grid">
        {bestSellingProducts.map((product) => (
          <AppCard key={product.id} variant="bestSelling" {...product} />
        ))}
      </div>
    </section>
  );
}

