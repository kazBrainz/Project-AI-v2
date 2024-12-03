import Footer from "@/components/footer";
import AITools from "@/components/Home/ai-tools";
import Hero from "@/components/Home/hero";
import Partners from "@/components/Home/partners";
import Testimonials from "@/components/Home/testimonials";
import ToolsResources from "@/components/Home/tools-resources";
import UpcomingWebinars from "@/components/Home/upcoming-webinars";
import WhatIsAi from "@/components/Home/what-isAI";
import WhyAi from "@/components/Home/why-ai";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Partners />
        <WhatIsAi />
        <AITools />
        <ToolsResources />
        <WhyAi />
        <UpcomingWebinars />
        <Testimonials />
      </main>
    </Layout>
  );
}
