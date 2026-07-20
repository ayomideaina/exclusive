import SectionHeader from "../../../components/layout/SectionHeader";
import SectionNavArrows from "../../../components/SelectionNavArrows";
import AppCard from "../../../components/AppCard";
import Button from "../../../components/AppButton";
import { exploreProducts } from "../../../data/mockData";

export default function ExploreProductsSection() {
  return (
    <section className="container-app section">
      <SectionHeader eyebrow="Our Products" title="Explore Our Products" action={<SectionNavArrows />} />

      <div className="product-grid">
        {exploreProducts.map((product) => (
          <AppCard key={product.id} variant="explore" {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="primary">View All Products</Button>
      </div>
    </section>
  );
}

