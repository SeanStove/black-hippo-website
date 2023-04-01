import { Container } from "@/components";
import Head from "next/head";

export default function EmailDisclaimer() {
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
              Email disclaimer
            </h1>
          </div>
          <div className="mt-8">
            <div>
              <p>
                The information contained in these e-mails is the{" "}
                <span className="font-bold">property</span>
                of Black Hippo BV. This information is
                <span className="font-bold">strictly confidential</span> and is
                intended for the exclusive use of the individual or entity that
                is the named addressee. It is prohibited to read, distribute,
                retain, copy or use this information or any part of it without
                explicit authorization.
              </p>

              <p className="mt-4">
                If you received this e-mail by mistake, please inform the sender
                by reply e-mail, notify us immediately by e-mail and delete the
                e-mail you received in error and discard any paper copies of the
                message.
              </p>

              <p className="mt-4">
                E-mail messages and attachments are carefully scanned for
                computer viruses according to our standard procedure. However,
                we cannot guarantee that they are virus-free. Addressees should
                scan this e-mail and any attachments for viruses themselves. We
                do not guarantee in any way the absence of viruses in this
                e-mail or any attachments and we disclaim any liability in case
                of security problems this message may cause to any system.
                Transmissions over the internet are inherently insecure and we
                cannot guarantee the proper or complete transmission of the
                information contained in this communication or the time of its
                receipt.
              </p>

              <p className="mt-4">
                <span className="font-bold">Privacy</span>: E-mail sent from or
                to the address of the sender mentioned above can be read and
                kept by Black Hippo BV.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
