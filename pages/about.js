import Container from "../components/container";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header";
export default function About() {
  return (
    <Layout>
      <Head>
        <title>gaizka | about</title>
      </Head>
      <Container>
        <Header />
      </Container>
      <Footer />
    </Layout>
  );
}
