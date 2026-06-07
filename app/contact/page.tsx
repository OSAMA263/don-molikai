import SlideLine from "@/components/animations/slide-line";
import Container from "@/components/layout/container";
import ViewPortSection from "@/components/ui/full-view-section";
import LargeText from "@/components/ui/large-text";
import MainBtn from "@/components/ui/main-button";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our team for questions, feedback, partnerships, or product information. We're here to help.",
};

export default function Contact() {
  return (
    <Container widthCap className="uppercase font-extrabold">
      <ViewPortSection
        src="/contact.jpg"
        className="lg:w-[70vw]! min-h-[80vh]! h-[80vh]! rounded-2xl overflow-hidden relative! mx-auto mt-20"
      />

      {/* CONTACT INFORMATION */}
      <div className="flex-center lg:gap-16 gap-6">
        <LargeText>contact</LargeText>
        <SlideLine className="text-center md:text-2xl w-[80%] mx-auto">
          write to us. whether you have questions, curiosity, or just
          want to say hello. we check the spam folder every morning,
          so do not worry, at donmolikai there is no lost mail.
        </SlideLine>
        <MainBtn
          href="mailto:osama.khaled0707@gmail.com"
          as="a"
          className="md:text-4xl text-xl"
        >
          osama.khaled0707@gmail.com
        </MainBtn>
        <SlideLine className="text-center w-[80%] mx-auto">
          follow us. we keep our social media profiles active, where
          we share our way of seeing the world and even the occasional
          secret recipe.
        </SlideLine>

        <div className="flex max-lg:flex-col justify-between *:lg:text-7xl *:text-4xl items-center w-full">
          <MainBtn
            href="https://www.youtube.com/watch?v=BJ8ObNspk2I"
            as="a"
            blank
          >
            youtube
          </MainBtn>
          <MainBtn
            href="https://www.reddit.com/r/TerryDavis/comments/1ji6fau/this_literally_me_when_i_was_a_kid_my_parents/"
            as="a"
            blank
          >
            reddit
          </MainBtn>
        </div>
      </div>
    </Container>
  );
}
