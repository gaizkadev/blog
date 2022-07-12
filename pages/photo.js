import Head from "next/head";
import { Alert } from "../components/alert";
import Tittle from "../components/photo/tittle";
import Itxina from "../public/mountains.jpg";
import Layout from "../components/layout";

export default function Photo() {
  return (
      <Layout>
        <Head>
          <title>Gaizka | Photo Stories</title>
        </Head>
        <Alert />
        <Tittle />
      </Layout>
  );
}
