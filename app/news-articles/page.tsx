import Layout from "@/components/Layout";
import News from "@/components/News-Articles/News";
import ResourcesHero from "@/components/Resources/hero";

function NewsArticles() {
  return (
    <Layout>
      <main>
        <ResourcesHero
          backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/news-articles/news-articles-hero.jpeg') lightgray"
          title="News & Articles"
          desc="Stay updated with the latest trends and insights on the integration of AI in education. Explore our curated collection of articles, news stories, and expert opinions focused on how AI is transforming teaching and learning, particularly within Nigeria and globally."
        />
        <News />
      </main>
    </Layout>
  );
}

export default NewsArticles;
