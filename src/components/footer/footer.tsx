import { Container, CookieConsent, navigation } from "@/components";

import Image from "next/image";
import Link from "next/link";
import { LogoText } from "@/components/header/logo-text";

export function Footer() {
  return (
    <>
      <footer>
        <Container className="py-20 border-t border-primary mt-24">
          <div className="mb-16">
            <Link href={"/"} className="flex flex-wrap justify-center">
              <Image
                className="block"
                src="./logo.svg"
                width={71}
                height={80}
                alt="Black Hippo"
              />
              <div className="mt-7 w-full flex justify-center">
                <LogoText />
              </div>
            </Link>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <h3 className="text-base font-bold mb-4 text-secondary">
                Beveren
              </h3>
              <ul className="text-primary text-base leading-7">
                <li>Kruisstraat 7</li>
                <li>9120 Beveren</li>
                <li>info@blackhippo.be</li>
                <li>BTW: BE 0742.699.306</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4 text-secondary">
                Izegem
              </h3>
              <ul className="text-primary text-base leading-7">
                <li>Odiel spruyttestraat 2</li>
                <li>8700 Izegem</li>
                <li>info@blackhippo.be</li>
                <li>BTW: BE 0742.699.306</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4 text-secondary">
                Sitemap
              </h3>
              <ul className="text-primary text-base leading-7">
                {navigation.map((nav) => {
                  return (
                    <li key={nav.name}>
                      <a href={nav.link} className="text-text hover:underline">
                        {nav.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4 text-secondary">Legal</h3>
              <ul className="text-primary text-base leading-7">
                <li>
                  <Link
                    className="text-text hover:underline"
                    href="/privacyverklaring"
                  >
                    Privacyverklaring
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
      <CookieConsent />
    </>
  );
}
