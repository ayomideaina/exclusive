import { useState } from "react";
import SectionHeader from "../../../components/layout/SectionHeader";
import SectionNavArrows from "../../../components/SelectionNavArrows";
import CountdownTimer from "../../../components/CouterTimer";
import AppCard from "../../../components/AppCard";
import Button from "../../../components/AppButton";
import { flashSaleProducts } from "../../../data/mockData";

export default function FlashSalesSection() {
  const [saleEndDate] = useState(() => new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

  return (
    <section className="container-app section">
      <SectionHeader
        eyebrow="Today's"
        title="Flash Sales"
        action={
          <div className="flex items-center gap-6">
            <CountdownTimer targetDate={saleEndDate} />
            <SectionNavArrows />
          </div>
        }
      />

      <div className="product-grid">
        {flashSaleProducts.map((product) => (
          <AppCard key={product.id} variant="flashSale" {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="primary">View All Products</Button>
      </div>
    </section>
  );
}
