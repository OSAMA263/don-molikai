import SlideLine from "@/components/animations/slide-line";
import ScrollXOnMouseMove from "@/components/features/history/scrollx-on-mouse-move";
import ActiveProductLink from "@/components/features/products/single-page-active-product";
import Container from "@/components/layout/container";
import ViewPortSection from "@/components/ui/full-view-section";
import LargeText from "@/components/ui/large-text";
import Crown from "@/components/ui/navbar/crown";
import { ALL_PRODUCTS } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find((pro) => pro.id === id);

  return {
    title: product?.name.toUpperCase(),
    description: `Discover ${product?.name}, a delicious food product made with quality ingredients.`,
  };
}

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = ALL_PRODUCTS.find((pro) => pro.id === id);

  if (!product) return notFound();

  return (
    <Container>
      <ViewPortSection
        style={{
          backgroundColor: product?.bg,
          color: product?.color,
        }}
        className="[&>#wrapper]:space-y-20 pb-30 relative!"
      >
        <div className="flex-center h-dvh gap-6">
          <LargeText line="stuffed" />
          <SlideLine className="text-4xl upercase">
            {product?.name}
          </SlideLine>
          <LargeText line="with meat" />
          {/* product image */}
          <div className="absolute size-60 mx-auto">
            <Image
              src={product?.img ?? "/placeholder-img.jpg"}
              alt={product?.name ?? "product"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>

        {/* links other products in the category */}
        <ActiveProductLink id={id} color={product?.color} />

        <SlideLine className="lg:w-[60%] w-[80%] text-xl flex-center mx-auto text-center">
          <Crown />
          {product?.food_details}
        </SlideLine>
      </ViewPortSection>

      {/* check other products */}

      <SlideLine className="text-center text-4xl">
        check other products
      </SlideLine>

      <ScrollXOnMouseMove arr={ALL_PRODUCTS} />
    </Container>
  );
}
