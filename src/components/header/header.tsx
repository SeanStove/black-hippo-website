import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { LogoText } from "@/components/header/logo-text";

export const navigation = [
  {
    name: "Expertise",
    link: "/#expertise",
  },
  {
    name: "Aanpak",
    link: "/#aanpak",
  },
  {
    name: "Cases",
    link: "/#cases",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

export function Header() {
  return (
    <>
      <div className="absolute -top-[1000px] -right-[1000px] -z-10">
        <Image
          src="/bg/secondary-bg.webp"
          width={2316}
          height={2316}
          alt="bg"
        />
      </div>
      <header className="pt-12 pb-20 flex justify-center">
        <Container>
          <div className="flex flex-wrap justify-between w-full items-end">
            <Link href={"/"} className="flex items-center">
              <Image
                src="./logo.svg"
                width={71}
                height={80}
                alt="Black Hippo"
              />
              <div className="ml-5">
                <LogoText />
              </div>
            </Link>
            <nav>
              <ul className="flex gap-x-6 lg:gap-x-10">
                {navigation.map((nav) => {
                  return (
                    <li key={nav.name}>
                      <a
                        className="inline-flex text-base text-black hover:underline py-5"
                        href={nav.link}
                      >
                        {nav.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
