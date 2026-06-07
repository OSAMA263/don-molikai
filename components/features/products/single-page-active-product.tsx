import MainBtn from "@/components/ui/main-button";
import { PRODUCTS } from "@/data/products";

export default function ActiveProductLink({
  id,
  color,
}: {
  color: string|undefined;
  id: string;
}) {
  const restCategoryProducts = PRODUCTS.find((cat) =>
    cat.menu.find((pro) => pro.id == id),
  );

  return (
    <div className="flex-center gap-8 flex-row uppercase font-extrabold sm:text-2xl">
      {restCategoryProducts?.menu.map((pro) => (
        <MainBtn
          as="a"
          style={{
            color,
            borderBottom: 1,
            borderStyle: "solid",
            borderColor: id === pro?.id ? color : "transparent",
          }}
          href={`/products/${pro?.id}`}
          key={pro?.id}
        >
          {pro?.name}
        </MainBtn>
      ))}
    </div>
  );
}
