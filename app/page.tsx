import Hero from "@/components/home/Hero";
import ClassPreview from "@/components/home/ClassPreview";
import WhyIBG from "@/components/home/WhyIBG";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClassPreview />
      <WhyIBG />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
