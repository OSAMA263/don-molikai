import { Crown } from "@/components/ui/Logo";
import MainBtn from "@/components/ui/main-button";
import { Fragment } from "react/jsx-runtime";

type PropsTypes = {
  arr: { name: string }[];
  handleClick: (name: string) => void;
  productType?: string;
  item?: string;
};

export default function ProductTab({
  arr,
  handleClick,
  productType,
  item,
}: PropsTypes) {
  return (
    <div className="flex items-center gap-10 text-2xl">
      {arr.map(({ name }, i) => (
        <Fragment key={name}>
          <MainBtn
            onClick={() => handleClick(name)}
            className={`border-b ${productType && productType !== name ? "border-transparent" : item && item !== name ? "border-transparent" : ""}`}
          >
            {name}
          </MainBtn>
          {productType && i == 1 && <Crown />}
        </Fragment>
      ))}
    </div>
  );
}
