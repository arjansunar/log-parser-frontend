import Head from "next/head";
import { Map } from "../components/Map";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Log parser viz</title>
        <meta
          name="description"
          content="Log parsing with multithreading and vizualizing the data "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
    </div>
  );
}
