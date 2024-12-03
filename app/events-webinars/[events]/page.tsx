import EventOverview from "@/components/Events/EventOverview";
import EventHero from "@/components/Events/hero";
import Layout from "@/components/Layout";
import React from "react";

function EventDetails() {
  return (
    <Layout>
      <main className="mt-[82px] bg-[#F4F7FA]">
        <EventHero />
        <EventOverview />
      </main>
    </Layout>
  );
}

export default EventDetails;
