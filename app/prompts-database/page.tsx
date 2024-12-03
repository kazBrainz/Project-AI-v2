import Prompts from "@/components/AI-Prompts/Prompts";
import Layout from "@/components/Layout";
import ResourcesHero from "@/components/Resources/hero";

function AIPrompts() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/ai-prompts/ai-prompts-hero.jpg') lightgray"
          title="Access AI-Generated Prompts for Smarter Lesson Planning"
          desc="Browse and contribute educational prompts designed to simplify lesson creation, boost student engagement, and enhance personalized learning with AI"
        />
        <Prompts />
      </main>
    </Layout>
  );
}

export default AIPrompts;
