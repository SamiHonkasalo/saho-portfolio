import { Layout } from "@/layout/Layout";
import { About } from "@/sections/about/About";
import { Hero } from "@/sections/hero/Hero";

export const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};
