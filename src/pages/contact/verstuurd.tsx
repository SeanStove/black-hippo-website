import { Container } from "@/components";
import Head from "next/head";

export default function Verstuurd() {
  return (
    <>
      <Head>
        <title>
          Black hippo: Oplossingen om je logistieke en sales processen te
          optimaliseren
        </title>
        <meta
          name="description"
          content="Black hippo. Wij creëren inzicht in je gegevens en leveren eenvoudige en flexibele oplossingen om je logistieke en sales processen te optimaliseren."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <section className="mb-44" id="heading">
        <Container>
          <div className="mb-16">
            <h1 className="text-4xl lg:text-6xl leading-none">
              Uw bericht werd verstuurd
            </h1>
          </div>
          <div className="mt-8">
            <div>
              <p>We contacteren je snel!</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
