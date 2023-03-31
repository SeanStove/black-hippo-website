import { MouseEvent, useEffect, useState } from "react";

import { Container } from "../container";
import Link from "next/link";

function setCookie(name: string, value: any, days: number) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name: string) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function CookieConsent() {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    let cookieConsent = getCookie("cookie_consent");
    let consentIsTrue = cookieConsent === "accepted";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentIsTrue) {
      setCookie("cookie_consent", "accepted", 365);
      setCookieConsentIsTrue(true);
    }
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <section
      role="dialog"
      className="fixed bottom-0 bg-white w-full z-50 text-sm border-t border-primary"
    >
      <Container>
        {/* googleoff: all */}
        <div className="mx-auto max-w-6xl py-4 px-4">
          <div className="flex justify-between items-center">
            <span className="">
              Deze website maakt gebruik van cookies om ervoor te zorgen dat je
              de beste ervaring op onze website krijgt.{" "}
              <Link
                href="/privacyverklaring"
                className="font-bold underline focus:outline-none"
              >
                Privacyverklaring
              </Link>
            </span>

            <button
              className="bg-primary text-white text-base py-2 px-10 rounded-3xl hover:bg-secondary transition-colors"
              onClick={onClick}
            >
              Ik begrijp het en ik ga akkoord
            </button>
          </div>
        </div>
        {/* googleon: all */}
      </Container>
    </section>
  );
}
