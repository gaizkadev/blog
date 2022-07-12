import Head from "next/head";
import { Alert } from "../components/alert";
import Tittle from "../components/photo/tittle";
import Itxina from "../public/mountains.jpg";

export default function Photo() {
  return (
    <>
      <Head>
        <title>gaizka | Photo Stories </title>
      </Head>
      <Alert />
      <Tittle />
    </>
  );
}
