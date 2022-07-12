import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Hero from "../components/hero";
import SubHero from "../components/subhero";


export default function Index() {
  return (
    <div className="bg-red-200">
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Header />
        <Hero />
        <SubHero />
      </Container>
    </Layout>
    </div>
  );
}
