import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import YouTube from "react-youtube";

const navigation = [
  { name: "About", href: "/#about" },
  {
    name: "Getting There",
    href: "/getting-there",
    // subItems: [
    //   { name: "Location", href: "/getting-there#location" },
    //   { name: "Gate Times", href: "/getting-there#gate-times" },
    //   { name: "Site Map", href: "/getting-there#site-map" },
    // ],
  },
  {
    name: "Info",
    href: "/info",
    subItems: [
      { name: "Vision", href: "/info#vision" },
      { name: "Location", href: "/info#location" },
      { name: "Camping", href: "/info#camping" },
      { name: "Festival Guidelines", href: "/info#festival-guidelines" },
      { name: "Core Festival Rules", href: "/info#core-festival-rules" },
      { name: "What To Bring", href: "/info#what-to-bring" },
      { name: "Cash/EFTPOS", href: "/info#casheftpos" },
      { name: "Road Safety", href: "/info#road-safety" },
      { name: "Sneak-ins Policy", href: "/info#sneak-ins-policy" },
      { name: "Conditions Of Entry", href: "/info#conditions-of-entry" },
    ],
  },
  { name: "Tickets", href: "/tickets" },
  { name: "Lineup", href: "/lineup" },
  // { name: "Set Times", href: "/set-times" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const VIDEO_ID = "uh4OZP7R9QM";

export default function Example(props: {
  showLanding?: boolean;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  const [subItemOpen, setSubItemOpen] = useState<string>();
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Multiverse 2025</title>
      </Head>
      <div className="overflow-x-hidden">
        {props.showLanding ? (
          <>
            <div className="placeholder-background"></div>
            <YouTube
              videoId={VIDEO_ID}
              loading={"eager"}
              className="video-container"
              style={{ opacity: showVideo ? 1 : 0 }}
              opts={{
                height: undefined,
                width: undefined,
                playerVars: {
                  disablekb: 1,
                  rel: 0,
                  modestbranding: 1,
                  controls: 0,
                  autoplay: 1,
                  playsinline: 1,
                  loop: 1,
                  playlist: VIDEO_ID,
                },
              }}
              onReady={(e) => {
                e.target.mute();
                e.target.playVideo();
              }}
              onPlay={() => {
                setShowVideo(true);
              }}
              onPause={() => {
                setShowVideo(false);
              }}
              onEnd={() => {
                setShowVideo(false);
              }}
              onError={() => {
                setShowVideo(false);
              }}
              onStateChange={(e) => {
                if (
                  e.data === YouTube.PlayerState.CUED ||
                  e.data === YouTube.PlayerState.UNSTARTED
                ) {
                  setShowVideo(false);
                }
              }}
            />

            <div className="video-overlay bg-black bg-opacity-20"></div>
            <div className="min-h-screen w-screen flex flex-col justify-between">
              <div className="flex flex-col flex-grow items-center gap-12 px-4 pt-24 md:pt-36 ">
                <Image
                  src="/images/logo.png"
                  alt="me"
                  width={250}
                  height={180}
                  className="w-32 md:w-64"
                />
                <h3
                  className={`text-xl md:text-xl font-mono font-thin text-center leading-relaxed text-slate-50 font-sans`}
                >
                  presents
                </h3>
                <Image
                  src="/images/multiverse-logo.png"
                  alt="me"
                  width={750}
                  height={100}
                />
                <h3
                  className={`text-2xl md:text-3xl font-mono text-center leading-relaxed text-slate-50`}
                >
                  January 23 &mdash; 26, 2025
                </h3>
                <h3
                  className={`text-xl md:text-2xl font-mono font-light text-center leading-relaxed text-slate-50 pb-16`}
                >
                  Redbanks, Nugent, Tasmania
                </h3>
              </div>
            </div>
            {
              <a
                target="_blank"
                href="https://www.facebook.com/antichristhari"
                className={`placeholder-attribution fixed bottom-4 right-4 text-md md:text-2xl font-thin font-mono ${
                  showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                Photo by Hari Prasad
              </a>
            }
          </>
        ) : null}

        <Disclosure
          id="nav"
          as="nav"
          className={`backdrop-blur-with-fallback fixed top-0 font-mono lg:flex lg:justify-center w-screen z-10`}
          style={{ pointerEvents: "all" }}
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href={"/"}>
                        <img
                          className="h-6"
                          src="/images/logo-small.png"
                          alt="Technobrats Logo"
                        />
                      </Link>
                    </div>
                    <div className="hidden lg:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              router.asPath === item.href
                                ? " text-white border-b-2 border-primary-base"
                                : "text-gray-300  hover:text-primary-base",
                              "px-3 py-2 text-md font-medium"
                            )}
                            aria-current={
                              router.asPath === item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className="relative inline-flex items-center justify-center p-2 text-gray-100 hover:bg-opacity-30 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => {
                        // Wait 100ms
                        setTimeout(() => {
                          document

                            .getElementById("nav-panel")
                            ?.scrollIntoView({ block: "nearest" });
                        }, 100);
                      }}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel
                id="nav-panel"
                className={`lg:hidden h-screen-with-nav overflow-y-auto`}
              >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col items-center gap-3">
                  {navigation.map((item) =>
                    item.subItems ? (
                      <div className="w-full" key={item.name}>
                        <div className="flex justify-center flex-row  w-full relative ">
                          <Disclosure.Button
                            as="a"
                            href={item.href}
                            className={
                              "text-gray-100 hover:text-white px-3 py-3 font-medium text-xl font-mono text-center"
                            }
                          >
                            {item.name}
                          </Disclosure.Button>
                          <button
                            className="absolute right-16 h-full"
                            onClick={() =>
                              setSubItemOpen(
                                subItemOpen === item.name
                                  ? undefined
                                  : item.name
                              )
                            }
                          >
                            {subItemOpen === item.name ? (
                              <MinusIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </button>
                        </div>

                        {item.subItems ? (
                          <div
                            className={`flex flex-col items-center overflow-hidden transition-all`}
                            style={{
                              maxHeight:
                                subItemOpen === item.name
                                  ? `${item.subItems.length * 44}px`
                                  : "0px",
                            }}
                          >
                            {item.subItems.map((subItem) => (
                              <Disclosure.Button
                                key={item.name + "-" + subItem.name}
                                as="a"
                                href={subItem.href}
                                className={
                                  "text-gray-100 hover:text-white px-3 py-2 font-light text-lg font-mono text-center"
                                }
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={
                          "text-gray-100 hover:text-white px-3 py-3 font-medium text-xl font-mono text-center w-fit"
                        }
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main
          className={
            props.showLanding
              ? ""
              : "backdrop-blur-lg bg-black bg-opacity-70 overflow-auto h-screen pt-16"
          }
        >
          {props.children}
        </main>
      </div>
    </>
  );
}
