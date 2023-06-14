import { Layout } from "@/layout/Layout";
import { About } from "@/sections/about/About";
import { Contact } from "@/sections/contact/Contact";
import { Hero } from "@/sections/hero/Hero";
import { Technologies } from "@/sections/technologies/Technologies";

export const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Technologies />
      <Contact />
    </Layout>
  );
};
