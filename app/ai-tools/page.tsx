import Layout from "@/components/Layout";
import AllResources from "@/components/Resources/all-resources";
import ResourcesHero from "@/components/Resources/hero";
import React from "react";

function Resources() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/ai-tools-hero.jpg') lightgray"
          title="Discover AI Tools for Enhanced Teaching and Learning"
          desc="Explore a curated collection of AI-driven tools designed to empower
        educators, streamline classroom management, and personalize student
        learning experiences."
        />
        <AllResources />
      </main>
    </Layout>
  );
}

export default Resources;
