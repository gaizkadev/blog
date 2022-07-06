import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h2 className="text-6xl md:text-6sxl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">home.</a>
            </Link>
          </h2>
          <h2 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/about">
              <a className="hover:underline">about.</a>
            </Link>
          </h2>
          <h2 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/gaizka">
              <a className="hover:underline">gaizka.</a>
            </Link>
          </h2>
        </section>
      </Container>
      <Footer />
    </Layout>
  );
}
