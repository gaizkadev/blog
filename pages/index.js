import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Hero from "../components/hero";
import SubHero from "../components/subhero";
import { Alert } from "../components/alert";


export default function Index() {
  return (
    <div className="bg-red-200">
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Alert />
        <Header />
        <Hero />
        <SubHero />
      </Container>
    </Layout>
    </div>
  );
}
