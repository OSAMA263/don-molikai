import BackgroundImg from "@/components/ui/bg-img";
import ProductCard from "@/components/features/home/product-card";
import ProductsViewSection from "@/components/features/home/products-view-seciton";
import { FaCrown } from "react-icons/fa6";
import SlideChar from "@/components/animations/slide-letters";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <BackgroundImg src="hero/HERO_HOME.jpg" className="h-[115dvh]">
        <div className="font-extrabold pb-20 text-white flex size-full flex-col text-[11rem] leading-none items-center justify-end uppercase">
          <div className="flex items-center gap-10">
            <span className="text-2xl! w-1/2 text-center">
              since <br /> 1987
            </span>
            <span>from</span>
            <span className="text-2xl! w-1/2 text-center">
              new <br /> tradition
            </span>
          </div>
          <span>navarra</span>
          <span>to all of spain</span>
        </div>
      </BackgroundImg>
      {/* products */}
      <section className="space-y-20 w-[60%] mx-auto" id="products">
        <div className="gap-10 flex text-xl flex-col uppercase items-center justify-center text-center font-extrabold">
          <span className=" flex-col items-center text-center">
            <Crown /><SlideChar line="cock asdasd asdas"/> <span>the importance of pepper</span>
          </span>
          <span>
            at don molinico we are back. renewed. and we do it while
            preserving tradition and flavor. from navarra to the
            world, we come to offer you the best stuffed piquillo
            peppers you have ever tasted. because we do not have
            grandma, but we have her recipe.
          </span>
        </div>
        {/* products 3 cards */}
        <ProductCard link="" img="/home-card-lata.jpg" />
      </section>
      {/* new fukcing tradition */}
      <section id="new tradition">
        <div className="font-extrabold flex size-full flex-col text-[11rem] leading-none items-center justify-end uppercase">
          <div className="flex items-center gap-10">
            <span className="text-2xl! w-1/2 text-center">
              since <br /> 1987
            </span>
            <span>try</span>
            <span className="text-2xl! w-1/2 text-center">
              new <br /> tradition
            </span>
          </div>
          <span>the flavor</span>
          <span>of the new</span>
          <span>tradition</span>
        </div>
        {/*  */}
        <div className="font-extrabold text-xl text-center">
          <Crown />
          <p>
            come try our stuffed piquillo peppers and discover the
            best flavor.
          </p>
          <p>
            a range of delicious products ready to eat. do not miss
            the chance to lick your fingers clean.
          </p>
        </div>
      </section>
      {/* menu-2 */}
      <BackgroundImg
        src="hero/HOME_MAIN_2.jpg"
        className="h-dvh sticky top-0"
      >
        <div className="font-extrabold text-white flex size-full flex-col text-8xl leading-none items-center justify-center uppercase">
          <span>new</span>
          <span>tradition</span>
          <Crown className="mt-10 mb-10 text-white text-6xl" />
          <span>for</span>
          <span>snacking</span>
        </div>
      </BackgroundImg>
      {/* products tabs */}
      <ProductsViewSection />
    </div>
  );
}

function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
