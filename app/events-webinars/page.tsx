import AllEvents from "@/components/Events/AllEvents";
import Layout from "@/components/Layout";
import ResourcesHero from "@/components/Resources/hero";

function EventsandWebinars() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/events-webinars/events-webinars.jpg') lightgray"
          title="Events & Webinars"
          desc="Join our expert-led sessions to stay ahead in AI, education, and innovation. Discover new trends, tools, and insights to enhance your skills and knowledge."
        />
        <AllEvents />
      </main>
    </Layout>
  );
}

export default EventsandWebinars;
