import Layout from "@/components/Layout";
import ResourcesHero from "@/components/Resources/hero";
import SubmittedPrompts from "@/components/Submissions/SubmittedPrompts";
import React from "react";

function Submission() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/my-submissions-hero.svg') lightgray"
          title="My Submission"
          desc="Keep track of all your contributions to the AI for Educators NG community. Here, you can view the status of your submitted AI prompts, registered events, and forum posts."
        />
        <SubmittedPrompts />
      </main>
    </Layout>
  );
}

export default Submission;
