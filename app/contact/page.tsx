import ContactDetails from "@/components/Contact";
import Layout from "@/components/Layout";
import ResourcesHero from "@/components/Resources/hero";

function Contact() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/contact_hero.jpeg') lightgray"
          title="Get in Touch with AI for Educators NG"
          desc="We’re here to help! Whether you have a question about our platform, need support with AI tools, or want to explore partnership opportunities, feel free to reach out to us. Our team is always ready to assist educators, researchers, and other stakeholders in enhancing education through AI."
        />
        <ContactDetails />
      </main>
    </Layout>
  );
}

export default Contact;
