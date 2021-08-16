import Head from "next/head";
import GoogleMap from "../components/GoogleMap";
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
      {/* <Map />
       */}
      <GoogleMap />
    </div>
  );
}
