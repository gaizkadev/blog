import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";


export default function Index() {
  return (
    <Layout>
      <Head>
          <title>{CMS_NAME}</title>
        </Head>
      <Container>
        <Header />
      </Container>
    </Layout>
  );
}
