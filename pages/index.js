import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Hero from "../components/hero";

export default function Index() {
  return (
    <div className="background-image">
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Header />
        <Hero />
      </Container>
    </Layout>
    </div>
  );
}
