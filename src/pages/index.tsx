import { Autoplay, Navigation, Pagination } from "swiper";
import { Container, Divider, Text, Title } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Black hippo: Software development</title>
        <meta
          name="description"
          content="Black Hippo begeleidt ondernemingen bij het digitaliseren en
          optimaliseren van hun bedrijfsprocessen"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <section className="mb-44" id="heading">
        <Container>
          <div className="mb-16">
            <h1 className="text-6xl lg:text-8xl leading-none">
              <span className="text-primary">Massive ideas</span>
              <br />
              <span className="text-secondary">Lightweight solutions</span>
            </h1>
          </div>
          <div className="ml-20 max-w-[400px]">
            <div className=" mb-20">
              <Text>
                Wil je jouw bedrijfsprocessen optimaliseren en duurzame groei
                realiseren?
                <br />
                <br />
                Ons team bij Black Hippo heeft de expertise in digitalisatie,
                innovatie en softwareontwikkeling om je daarbij te helpen. Met
                gespecialiseerde kennis op het gebied van Supply Chain
                begeleiden we je graag door de complexiteit van het huidig IT
                landschap.
              </Text>
            </div>
            <Text>
              Geïnteresseerd in een eenvoudige oplossing met snelle resultaten?
              Check onze cases
            </Text>
          </div>
        </Container>
      </section>
      <section className="relative" id="expertise">
        <div className="absolute -top-[1100px] -left-[1000px] -z-10">
          <Image
            src="/bg/primary-bg.webp"
            width={2585}
            height={2196}
            alt="bg"
          />
        </div>
        <Container className="mb-16">
          <Divider text="EXPERTISE" />
          <div className="my-20 mx-auto max-w-4xl">
            <Title className="text-center">
              We helpen onze klanten om hun doelen te bereiken
            </Title>
          </div>
          <ul className="sm:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-x-8 mt-20">
            <li className="mb-20">
              <div className="h-[180px] flex items-end mb-4">
                <Image
                  width={140}
                  height={143}
                  src="/assets/software-development.svg"
                  alt="Software Development"
                />
              </div>
              <div className="max-w-[200px]">
                <p className="text-base color-secondary mb-2">01</p>
                <h3 className="text-2xl text-primary mb-4">
                  Software Development
                </h3>
                <Text>
                  Innovatieve, gebruiksvriendelijke en op maat gemaakte
                  softwareoplossingen die uw processen stroomlijnen, kosten
                  verlagen en klantenervaring verbeteren.
                </Text>
              </div>
            </li>
            <li className="mb-20">
              <div className="h-[180px] flex items-end mb-4">
                <Image
                  width={150}
                  height={161}
                  src="/assets/devops-cloud.svg"
                  alt="DevOps & Cloud"
                />
              </div>
              <div className="max-w-[170px]">
                <p className="text-base color-secondary mb-2">02</p>
                <h3 className="text-2xl text-primary mb-4">DevOps & Cloud</h3>
                <Text>
                  Continue integratie en oplevering van softwareoplossingen,
                  gecombineerd met proactieve monitoring
                </Text>
              </div>
            </li>
            <li className="mb-20">
              <div className="h-[180px] flex items-end mb-4">
                <Image
                  width={194}
                  height={137}
                  src="/assets/iot-development.svg"
                  alt="IoT Development"
                />
              </div>
              <div className="max-w-[180px]">
                <p className="text-base color-secondary mb-2">03</p>
                <h3 className="text-2xl text-primary mb-4">IoT Development</h3>
                <Text>
                  Met onze expertise op het gebied van IoT-architectuur,
                  integraties, data-analyse en meer, kunnen we u helpen data
                  inzichtelijk te maken om zo bedrijfsprocessen krachtig bij te
                  sturen.
                </Text>
              </div>
            </li>
            <li className="mb-20">
              <div className="h-[180px] flex items-end mb-4">
                <Image
                  width={169}
                  height={155}
                  src="/assets/cloud-enablement.svg"
                  alt="Cloud Enablement"
                />
              </div>
              <div className="max-w-[200px]">
                <p className="text-base color-secondary mb-2">04</p>
                <h3 className="text-2xl text-primary mb-4">Cloud Enablement</h3>
                <Text>
                  Wij bieden deskundig advies om u te helpen uw applicaties naar
                  de cloud te migreren, beheren en optimaliseren waardoor het
                  volledig potentieel van cloud computing wordt benut.
                </Text>
              </div>
            </li>
            <li className="mb-20">
              <div className="h-[180px] flex items-end mb-4">
                <Image
                  width={130}
                  height={179}
                  src="/assets/consulting-service.svg"
                  alt="Consulting Service"
                />
              </div>
              <div className="max-w-[200px]">
                <p className="text-base color-secondary mb-2">05</p>
                <h3 className="text-2xl text-primary mb-4">
                  Consulting Service
                </h3>
                <Text>
                  We bieden professionele begeleiding en ondersteuning aan
                  bedrijven die willen innoveren en digitaliseren. Met ons
                  deskundig advies en op maat gemaakte oplossingen helpen wij uw
                  zakelijke doelstellingen te bereiken en voor te blijven op de
                  concurrentie.
                </Text>
              </div>
            </li>
          </ul>
        </Container>
      </section>
      <section className="relative" id="aanpak">
        <div className="absolute -top-[1000px] -right-[1000px] -z-10">
          <Image
            src="/bg/secondary-bg.webp"
            width={2316}
            height={2316}
            alt="bg"
          />
        </div>
        <Container className="mb-24">
          <div className="sm:flex flex-wrap lg:flex-nowrap items-center justify-between">
            <div className="lg:w-[50%]">
              <div className="lg:max-w-[600px]">
                <Divider text="Aanpak" />
                <Title className="mb-10 mt-20">Zo pakken we het aan</Title>
                <h3 className="text-2xl text-primary mb-4">
                  Prepare & Discover
                </h3>
                <Text className="mb-10">
                  We scannen uw huidige situatie en toetsen deze af met uw
                  doelstellingen. In deze fase zijn we vooral een luisterend
                  oor.
                </Text>
                <h3 className="text-2xl text-primary mb-4">Assess & plan</h3>
                <Text className="mb-10">
                  Omzetten van de waarnemingen uit de discovery fase in beknopte
                  bevindingen. Optimalisaties en mogelijkheden worden
                  voorgesteld.
                </Text>
                <h3 className="text-2xl text-primary mb-4">Scope & design</h3>
                <Text className="mb-10">
                  Afbakenen van de functionaliteit, voorstel tot iteratief
                  opleveren. Bepalen van scope voor Minimum Viable Product
                  (MVP), wireframes en designs voorzien.
                </Text>
                <h3 className="text-2xl text-primary mb-4">
                  Implement & Improve
                </h3>
                <Text className="mb-10">
                  Implementatie en incrementale oplevering zodanig dat op korte
                  termijn al resultaten zichtbaar zijn en de vruchten ervan snel
                  geplukt kunnen worden.
                </Text>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/assets/aanpak.png"
                  width={997}
                  height={997}
                  alt="Aanpak"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative" id="cases">
        <div className="absolute -top-[1100px] -left-[1000px] -z-10"></div>
        <Container>
          <Divider text="Cases" />
          <div className="py-40">
            <Swiper
              slidesPerView={global.window?.innerWidth <= 768 ? 1 : 3}
              className="cases"
              modules={[Pagination, Navigation]}
              navigation={true}
              pagination={{
                type: "fraction",
              }}
            >
              <SwiperSlide>
                <div className="group">
                  <div className="rounded-xl overflow-hidden inline-flex">
                    <Image
                      src="/assets/cases/Ecoline2.png"
                      width={398}
                      height={363}
                      alt="Ecoline Calculator applicatie"
                    />
                  </div>
                  <div className="transition-shadow group-hover:shadow-primary group-hover:shadow-xl w-[400px] min-h-[450px] p-10 bg-white -top-10 relative z-10 ml-10">
                    <h4 className="text-lg text-secondary">Ecoline</h4>
                    <h3 className="text-2xl text-primary mb-8">
                      Calculator applicatie
                    </h3>
                    <Text>
                      Voor Ecoline hebben we een custom software applicatie
                      geschreven die ontworpen is om de totale kosten van een
                      product te berekenen op basis van verschillende parameters
                      zoals de aankoopprijs, kostprijs van de componenten,
                      transport, wisselkoers enz. Het wordt gebruikt om hen te
                      helpen bij het bepalen van prijsstrategieën, het
                      voorspellen van inkomsten en het optimaliseren van hun
                      winstgevendheid.
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group">
                  <div className="rounded-xl overflow-hidden inline-flex">
                    <Image
                      src="/assets/cases/Jolipa2.png"
                      width={398}
                      height={363}
                      alt="Jolipa Supplier portal"
                    />
                  </div>
                  <div className="transition-shadow group-hover:shadow-primary group-hover:shadow-xl w-[400px] min-h-[450px] p-10 bg-white -top-10 relative z-10 ml-10">
                    <h4 className="text-lg text-secondary">Jolipa</h4>
                    <h3 className="text-2xl text-primary mb-8">
                      Supplier portal
                    </h3>
                    <Text>
                      De supplier portal is op maat ontwikkeld voor Jolipa. Het
                      is ontworpen om de voortgang van het bedrijfsproces van
                      staal tot verkoopbaar product te monitoren en op te
                      volgen. Het bevat taaktoewijzing, statusupdates, meldingen
                      en analyses om bedrijven te helpen hun productiviteit,
                      efficiëntie en kwaliteit van het werk te verbeteren.
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group">
                  <div className="rounded-xl overflow-hidden inline-flex">
                    <Image
                      src="/assets/cases/organi-case2.jpg"
                      width={398}
                      height={363}
                      alt="Organi Analytics & monitoring"
                    />
                  </div>
                  <div className="transition-shadow group-hover:shadow-primary group-hover:shadow-xl w-[400px] min-h-[450px] p-10 bg-white -top-10 relative z-10 ml-10">
                    <h4 className="text-lg text-secondary">Organi</h4>
                    <h3 className="text-2xl text-primary mb-8">
                      End-to-end zicht op prestaties van applicatielandschap
                    </h3>
                    <Text>
                      Via een iteratief proces en een nauwe samenwerking
                      slaagden Black Hippo en Organi in hun opzet. Niet alleen
                      verbeterde Organi de zichtbaarheid over het totale
                      applicatielandschap, nieuwe software wordt ook standaard
                      voorzien van de nodige kerncomponenten.
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group">
                  <div className="rounded-xl overflow-hidden inline-flex">
                    <Image
                      src="/assets/cases/chinoh-case2.png"
                      width={398}
                      height={363}
                      alt="Chinoh case"
                    />
                  </div>
                  <div className="transition-shadow group-hover:shadow-primary group-hover:shadow-xl w-[400px] min-h-[450px] p-10 bg-white -top-10 relative z-10 ml-10">
                    <h4 className="text-lg text-secondary">Chinoh</h4>
                    <h3 className="text-2xl text-primary mb-8">
                      Gecentraliseerde rapportering voor adequate analyse
                    </h3>
                    <Text>
                      Van een inefficiënt, repetitief en ingewikkeld proces naar
                      een volledig geautomatiseerd systeem. Het centraliseren
                      van gegevens, de introductie van de BI-tool en het
                      automatiseren van de rapporten leverden Chinoh een enorme
                      tijdswinst op en verhoogden het gebruiksgemak.
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group">
                  <div className="rounded-xl overflow-hidden inline-flex">
                    <Image
                      src="/assets/cases/swf-case2.png"
                      width={398}
                      height={363}
                      alt="SmartWithFood"
                    />
                  </div>
                  <div className="transition-shadow group-hover:shadow-primary group-hover:shadow-xl w-[400px] min-h-[450px] p-10 bg-white -top-10 relative z-10 ml-10">
                    <h4 className="text-lg text-secondary">SmartWithFood</h4>
                    <h3 className="text-2xl text-primary mb-8">
                      Van start-up naar scale-up: het nut van structuur en
                      processen
                    </h3>
                    <Text>
                      Om een volwaardige scale-up te worden had SmartWithFood
                      nood aan meer structuur en ondersteuning in hun processen.
                      Door de inbreng van Black Hippo evolueerde SmartWithFood
                      van een gemotiveerd team naar een efficient, performant en
                      gedreven team.
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section id="reviews">
        <Container>
          <Divider text="KLANTEN & REVIEWS" />
          <div className="py-12">
            <Swiper
              className="reviews"
              pagination={{
                type: "fraction",
              }}
              modules={[Pagination, Navigation]}
              navigation={true}
            >
              <SwiperSlide>
                <div className="w-full h-[600px]">
                  <div className="max-w-[1000px] mx-auto">
                    <p className="text-center mb-16  text-secondary italic text-5xl">
                      &quot;Black Hippo slaagt erin om de verschillende
                      cloudcomponenten te integreren tot 1 werkende
                      architectuur, met een heel sterk security-beleid&quot;
                    </p>
                  </div>
                  <div className="max-w-[700px] mx-auto">
                    <Text className="text-center mb-2">
                      &quot;Tom heeft enorm veel ervaring in cloudomgevingen.
                      Hij slaagt erin om de verschillende cloudcomponenten te
                      integreren tot 1 werkende architectuur, met een heel sterk
                      security-beleid zowel op het vlak van data als van de
                      applicatie zelf. Tom leert continu bij en is op de hoogte
                      van de nieuwste technologische ontwikkelingen. Hij legt de
                      lat zeer hoog, voor zichzelf en voor de software die we
                      opleveren. Voor Tom is software meer dan de gevraagde
                      functionaliteit alleen. De kwaliteit, performantie en
                      beveiliging ervan zijn minstens even belangrijk. Het
                      totaalplaatje moet kloppen. Ook de manier waarop we
                      software ontwikkelen tracht hij voortdurend te
                      verbeteren.&quot;
                    </Text>
                  </div>
                  <p className="text-center text-lg  font-bold mb-2 uppercase">
                    Kalman Tiboldi - CTO GemOne
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="max-w-[1000px] mx-auto">
                    <p className="text-center mb-16 italic text-secondary text-5xl">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      &quot;De maturiteit en expertise die Black Hippo
                      aanbrengt, zijn cruciaal voor het slagen van onze software
                      implementatie&quot;
                    </p>
                  </div>
                  <div className="max-w-[700px] mx-auto">
                    <Text className="text-center mb-2">
                      &quot;Marjan brengt de nodige structuur en dynamiek in het
                      bedrijf&quot;, licht Sabbe toe. &quot;We bespraken
                      dagelijks de stand van zaken en zaten tweewekelijks samen
                      met de stakeholders om de gedetailleerde planning voor de
                      volgende weken te overlopen. Hierbij schuwde ze ook de
                      bottlenecks niet. Een noodzaak om eventuele problemen te
                      overkomen en prioriteiten te stellen. Haar analyses zijn
                      haarscherp en ze omschrijft alles heel duidelijk, zodat
                      iedereen in het team begrijpt wat moet gebeuren. Met haar
                      maturiteit en uitgebreide kennis is ze absoluut een
                      toegevoegde waarde voor ons bedrijf.&quot;
                    </Text>
                  </div>
                  <p className="text-center text-lg text-secondary font-bold mb-2 uppercase">
                    Dick Sabbe - Managing Director Jolipa
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="max-w-[1000px] mx-auto">
                    <p className="text-center mb-16 italic text-secondary text-5xl">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      &quot;Zonder Black Hippo had GemOne een kritisch project
                      niet kunnen realiseren. Ze is de juiste persoon op de
                      juiste plaats, met een heel heldere, gestructureerde visie
                      en aanpak.&quot;
                    </p>
                  </div>
                  <div className="max-w-[700px] mx-auto">
                    <Text className="text-center mb-2">
                      &quot;Begin 2021 startte Marjan bij GemOne, initieel als
                      leider van een productteam. Na een maand vroegen we haar
                      of ze de rol van Chief Product Officer wilde opnemen. Zo
                      kreeg ze ineens 50 medewerkers onder zich. Marjan
                      structureerde het team, introduceerde processen,
                      verduidelijkte de taken en rolverdeling en zette heldere
                      communicatielijnen op. Zo verhoogde ze de efficiëntie en
                      veranderde ze de manier van werken naar een meer
                      prestatiegerichte aanpak. Ze geeft de mensen het nodige
                      duwtje in de rug, zonder te ver te gaan&quot;
                    </Text>
                  </div>
                  <p className="text-center text-lg text-secondary font-bold mb-2 uppercase">
                    Patrick Smets - CEO GemOne
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="relative" id="companies">
        <div className="absolute -top-[1000px] -right-[1000px] -z-10">
          <Image
            src="/bg/secondary-bg.webp"
            width={2316}
            height={2316}
            alt="bg"
          />
        </div>
        <Container className="pb-32">
          <div className="py-24">
            <Swiper
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="companies"
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/gemone.png"
                    alt="Gemone"
                    width={188}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/agidens.png"
                    alt="Agidens"
                    width={300}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/jolipa3.png"
                    alt="Jolipa"
                    width={200}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/leiedal.png"
                    alt="Leiedal"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/organi-logo.png"
                    alt="Organi"
                    width={188}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/swf-logo.png"
                    alt="SmartWithFood"
                    width={350}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/chinoh-logo.png"
                    alt="Chinoh"
                    width={200}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/ecoline2.png"
                    alt="Ecoline"
                    width={188}
                    height={166}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/assets/companies/climaways2.png"
                    alt="Climaways"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative">
        <div className="absolute -top-[1500px] -left-[1200px] -z-10">
          <Image
            src="/bg/primary-bg.webp"
            width={2585}
            height={2196}
            alt="bg"
          />
        </div>
        <Container>
          <Divider text="Contact" />
          <Title className="text-center mt-24">Contacteer ons</Title>
          <div>
            <form
              name="contact"
              method="post"
              action="/contact/verstuurd"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-8">
                <div className="sm:col-span-8 border border-primary rounded-md relative px-6 pt-6 pb-4">
                  <label
                    htmlFor="name"
                    className="absolute text-base text-primary top-[20px] px-2 bg-white left-4 -translate-y-8 peer-focus:-translate-y-8  transition-transform"
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full text-lg text-text outline-none rounded-md peer"
                    required
                  />
                </div>
                <div className="sm:col-span-8 border border-primary rounded-md relative px-6 pt-6 pb-4">
                  <label
                    htmlFor="email"
                    className="absolute text-base text-primary top-[20px] px-2 bg-white left-4 -translate-y-8 peer-focus:-translate-y-8 transition-transform"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full text-lg text-text outline-none rounded-md peer"
                    required
                  />
                </div>
                <div className="sm:col-span-8 border border-primary rounded-md relative px-6 pt-6 pb-4">
                  <label
                    htmlFor="phone"
                    className="absolute text-base text-primary top-[20px] px-2 bg-white left-4 -translate-y-8 peer-focus:-translate-y-8 transition-transform"
                  >
                    Telefoon *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full text-lg text-text outline-none rounded-md peer"
                    required
                  />
                </div>
                <div className="sm:col-span-8 border border-primary rounded-md relative px-6 pt-6 pb-4">
                  <label
                    htmlFor="message"
                    className="absolute text-base text-primary top-[20px] px-2 bg-white left-4 -translate-y-8 peer-focus:-translate-y-8 transition-transform"
                  >
                    Bericht *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full text-lg text-text outline-none rounded-md peer"
                    required
                    rows={4}
                  />
                </div>
                <div className="sm:col-span-8">
                  <Text>
                    Door hieronder op verstuur te klikken, ben je akkoord dat
                    Black Hippo jouw ingevulde gegevens opslaat en verwerkt in
                    lijn met onze{" "}
                    <Link
                      className="text-text underline"
                      href="/privacyverklaring"
                    >
                      privacyverklaring
                    </Link>
                    .
                  </Text>
                </div>
                <div className="sm:col-span-6">
                  <button
                    type="submit"
                    className="bg-primary text-white text-base py-2 px-10 rounded-3xl hover:bg-secondary transition-colors"
                  >
                    Verstuur
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
