import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
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
    </Layout>
  );
}
