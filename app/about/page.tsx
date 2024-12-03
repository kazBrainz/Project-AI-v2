import AboutUs from "@/components/About";
import FAQS from "@/components/About/FAQS";
import Layout from "@/components/Layout";
import ResourcesHero from "@/components/Resources/hero";

function About() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/about-hero.svg') lightgray"
          title="About us"
          desc=""
        />
        <div className="bg-[#F4F7FA]">
          <div className="container py-8 space-y-6">
            <AboutUs
              title="About us"
              paragraphA="Empowering Teachers, Transforming Education with AI"
              paragraphB="AI for Educators NG is a pioneering platform dedicated to equipping K-12 and higher education educators with the knowledge and tools to integrate Artificial Intelligence into their teaching practices. Our mission is to close the gap between technology and education, ensuring that teachers and students alike are prepared for the future of learning."
              type="About"
            />
            <AboutUs
              title="Our Mission"
              paragraphB="At AI for Educators NG, we believe that AI can revolutionize the way education is delivered and experienced. Our platform provides educators with access to AI tools, resources, and training to help them:"
              list={[
                "Enhance classroom teaching and personalized learning.",
                "Stay informed about the latest AI trends in education.",
                "Collaborate and connect with educators around the world who are passionate about the role of AI in teaching.",
              ]}
              type="Mission"
            />
            <AboutUs
              title="What We Offer"
              paragraphB="Our platform is designed to serve the educational community by providing:"
              list={[
                "AI Tools Database: A curated list of AI tools that educators can use for classroom management, student engagement, assessment, and lesson planning.",
                "AI Prompt Database: Access to AI-generated prompts to support lesson creation, homework, and personalized learning experiences.",
                "Webinars & Events: Regular webinars, workshops, and events to train educators on using AI effectively in their classrooms.",
              ]}
              type="Mission"
            />
            <AboutUs
              title="Our Partners"
              paragraphB="We collaborate with key organizations and stakeholders that share our vision for the future of education, including:"
              list={[
                "US Missions Nigeria",
                "AEIF - Alumni Engagement Innovation Fund",
                "Local and international educational institutions",
              ]}
              type="Mission"
            />
            <AboutUs
              title="Meet the Team"
              paragraphB="At AI for Educators NG, we are a group of passionate educators, technologists, and innovators dedicated to transforming teaching and learning through Artificial Intelligence. Our team combines years of experience in education, technology, and community development to ensure that educators worldwide have access to the tools and resources they need for success."
              images={[
                {
                  imageSrc: "/images/team-members/teamb.svg",
                  teamName: "Adanma Odefa",
                  teamRole: "Project Lead/Coordinator",
                },
                {
                  imageSrc: "/images/team-members/teamc.svg",
                  teamName: "Ngozi John-Uyah",
                  teamRole: "M&E Team Lead",
                },
                {
                  imageSrc: "/images/team-members/teamd.svg",
                  teamName: "Lekan Adeeko",
                  teamRole: "IT Team Lead",
                },
                {
                  imageSrc: "/images/team-members/teama.svg",
                  teamName: "Finbarr Aniekeme",
                  teamRole: "Media Lead",
                },
                {
                  imageSrc: "/images/team-members/teamf.svg",
                  teamName: "Chinwe Lilian Nwachuckwu",
                  teamRole: "M&E Team Member",
                },
                {
                  imageSrc: "/images/team-members/teamk.svg",
                  teamName: "Dr. Yemisi Agboola",
                  teamRole: "Facilitator",
                },
                {
                  imageSrc: "/images/team-members/teamg.svg",
                  teamName: "Ugonma Akanu",
                  teamRole: "Facilitator",
                },
                {
                  imageSrc: "/images/team-members/teamh.svg",
                  teamName: "Boboye Adeniji",
                  teamRole: "IT Team Member",
                },
                {
                  imageSrc: "/images/team-members/teamj.svg",
                  teamName: "Flora Asibe- Ohazurike",
                  teamRole: "IT Team Member",
                },
                {
                  imageSrc: "/images/team-members/teame.svg",
                  teamName: "Toluse Francis",
                  teamRole: "IT Team Member",
                },
                {
                  imageSrc: "/images/team-members/teami.svg",
                  teamName: "Amina Buhari",
                  teamRole: "Logistics",
                },
                {
                  imageSrc: "/images/team-members/teaml.png",
                  teamName: "Salahudeen Bello",
                  teamRole: "M&E Team Member",
                },
              ]}
              type="Team"
            />
            <FAQS />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
