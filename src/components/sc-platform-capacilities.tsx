"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useEffect, useRef } from "react";

function TorchOverlay() {
  return (
    <>
      <div className="__torch" />
      <style jsx global>{`
        :root {
          --torch-x: 50vw;
          --torch-y: 50vh;
        }
        .__torch {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            280px at var(--torch-x) var(--torch-y),
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.1) 35%,
            rgba(255, 255, 255, 0) 75%
          );
          mix-blend-mode: screen;
          opacity: 0;
          transition: opacity 0.15s ease;
          z-index: 50;
        }
        .__torch-on .__torch {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

/** COMPONENT */
export default function ScPlatformCapabilitiesGrid(data) {
  const d = data;

  console.log("Masonry data items:", data);
  return (
    <section
      id="platform-capcabilities-grid"
      className="bg-[#121219] bg-dark text-white px-4 md:px-0 section bg-dark"
    >
      {d.heading && (
        <div className="mx-auto max-w-8xl px-4 py-12 sm:py-16">
          <h2 className="text-center text-4xl md:text-[56px] font-semibold tracking-tight">
            {d.heading}
          </h2>
        </div>
      )}

      <div className="mx-auto max-w-7xl pb-16 sm:pb-20">
        {/* Masonry: responsive CSS columns */}
        <div className="grid grid-cols-12 auto-rows-auto items-start gap-4 md:gap-8 mb-4">
          {/* column 1 */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <Card1 className="" data={data.card1} />
            <Card4 className="" data={data.card4} />
          </div>
          {/* column 2 */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <Card2 className="" data={data.card2} />
            <Card5 className="" data={data.card5} />
            <Card7 className="" data={data.card7} />
          {/* column 3 */}
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            <Card3 className="" data={data.card3} />
            <Card6 className="" data={data.card6} />
          </div>
        </div>
        <div className="grid grid-cols-12 auto-rows-auto items-start gap-4 md:gap-8">
          {/* column 1 */}
          <Card8 className="col-span-12 md:col-span-5" data={data.card8} />
          <Card9 className="col-span-12 md:col-span-3" data={data.card9} />
          <Card10 className="col-span-12 md:col-span-4" data={data.card10} />
        </div>
      </div>

      <TorchOverlay />
    </section>
  );
}

/** Single card */

interface CardProps {
  className?: string;
  heading: string;
  description: string;
  cardImage: {
    node: {
      alt: string;
      link: string;
    };
  };
}

function Card1({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-100 w-full  pb-8 ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        background: `url(${data.cardImage.node.link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`flex p-5 sm:p-6 items-end h-full`}>
        <div className={`flex flex-col gap-3 `}>
          <div className="flex items-center justify-start ">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0002 28.75C26.1758 28.75 28.7502 26.1756 28.7502 23C28.7502 19.8243 26.1758 17.25 23.0002 17.25C19.8245 17.25 17.2502 19.8243 17.2502 23C17.2502 26.1756 19.8245 28.75 23.0002 28.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.8941 28.2273C35.6622 28.7528 35.593 29.3358 35.6955 29.901C35.7979 30.4662 36.0674 30.9878 36.4691 31.3985L36.5736 31.503C36.8977 31.8267 37.1547 32.211 37.3301 32.6341C37.5054 33.0571 37.5957 33.5106 37.5957 33.9685C37.5957 34.4265 37.5054 34.88 37.3301 35.303C37.1547 35.7261 36.8977 36.1104 36.5736 36.4341C36.25 36.7581 35.8657 37.0151 35.4426 37.1905C35.0196 37.3659 34.5661 37.4561 34.1081 37.4561C33.6502 37.4561 33.1967 37.3659 32.7736 37.1905C32.3506 37.0151 31.9662 36.7581 31.6426 36.4341L31.538 36.3295C31.1274 35.9278 30.6058 35.6584 30.0406 35.5559C29.4753 35.4534 28.8924 35.5226 28.3668 35.7545C27.8515 35.9754 27.412 36.3421 27.1024 36.8096C26.7928 37.2771 26.6266 37.8249 26.6244 38.3856V38.6818C26.6244 39.606 26.2573 40.4924 25.6037 41.146C24.9502 41.7995 24.0638 42.1666 23.1396 42.1666C22.2153 42.1666 21.3289 41.7995 20.6754 41.146C20.0219 40.4924 19.6547 39.606 19.6547 38.6818V38.525C19.6412 37.9482 19.4545 37.3889 19.1189 36.9197C18.7833 36.4505 18.3143 36.093 17.7729 35.8939C17.2473 35.662 16.6644 35.5928 16.0991 35.6953C15.5339 35.7978 15.0123 36.0672 14.6017 36.4689L14.4971 36.5735C14.1735 36.8975 13.7891 37.1545 13.3661 37.3299C12.943 37.5053 12.4896 37.5955 12.0316 37.5955C11.5736 37.5955 11.1202 37.5053 10.6971 37.3299C10.2741 37.1545 9.88972 36.8975 9.56607 36.5735C9.24206 36.2498 8.98502 35.8655 8.80965 35.4424C8.63428 35.0194 8.54401 34.5659 8.54401 34.1079C8.54401 33.65 8.63428 33.1965 8.80965 32.7734C8.98502 32.3504 9.24206 31.9661 9.56607 31.6424L9.67062 31.5379C10.0723 31.1272 10.3418 30.6056 10.4443 30.0404C10.5467 29.4752 10.4776 28.8922 10.2456 28.3666C10.0247 27.8513 9.65799 27.4118 9.19052 27.1022C8.72304 26.7926 8.17525 26.6265 7.61456 26.6242H7.31834C6.39411 26.6242 5.50772 26.2571 4.85418 25.6035C4.20065 24.95 3.8335 24.0636 3.8335 23.1394C3.8335 22.2151 4.20065 21.3287 4.85418 20.6752C5.50772 20.0217 6.39411 19.6545 7.31834 19.6545H7.47516C8.0519 19.641 8.61123 19.4544 9.08046 19.1187C9.54968 18.7831 9.90709 18.3141 10.1062 17.7727C10.3382 17.2472 10.4074 16.6642 10.3049 16.099C10.2024 15.5337 9.93292 15.0121 9.53122 14.6015L9.42668 14.4969C9.10267 14.1733 8.84563 13.789 8.67026 13.3659C8.49489 12.9429 8.40462 12.4894 8.40462 12.0314C8.40462 11.5735 8.49489 11.12 8.67026 10.6969C8.84563 10.2739 9.10267 9.88954 9.42668 9.56589C9.75033 9.24188 10.1347 8.98484 10.5577 8.80947C10.9808 8.6341 11.4342 8.54383 11.8922 8.54383C12.3502 8.54383 12.8036 8.6341 13.2267 8.80947C13.6498 8.98484 14.0341 9.24188 14.3577 9.56589L14.4623 9.67043C14.8729 10.0721 15.3945 10.3416 15.9597 10.4441C16.525 10.5466 17.108 10.4774 17.6335 10.2454H17.7729C18.2882 10.0246 18.7278 9.65781 19.0374 9.19034C19.3469 8.72286 19.5131 8.17506 19.5153 7.61437V7.31816C19.5153 6.39392 19.8825 5.50754 20.536 4.854C21.1895 4.20047 22.0759 3.83331 23.0002 3.83331C23.9244 3.83331 24.8108 4.20047 25.4643 4.854C26.1179 5.50754 26.485 6.39392 26.485 7.31816V7.47498C26.4872 8.03567 26.6534 8.58347 26.963 9.05094C27.2726 9.51842 27.7121 9.88517 28.2274 10.106C28.753 10.338 29.336 10.4072 29.9012 10.3047C30.4664 10.2022 30.988 9.93273 31.3986 9.53104L31.5032 9.42649C31.8268 9.10249 32.2112 8.84545 32.6342 8.67007C33.0573 8.4947 33.5108 8.40444 33.9687 8.40444C34.4267 8.40444 34.8802 8.4947 35.3032 8.67007C35.7263 8.84545 36.1106 9.10249 36.4343 9.42649C36.7583 9.75014 37.0153 10.1345 37.1907 10.5575C37.366 10.9806 37.4563 11.4341 37.4563 11.892C37.4563 12.35 37.366 12.8035 37.1907 13.2265C37.0153 13.6496 36.7583 14.0339 36.4343 14.3576L36.3297 14.4621C35.928 14.8728 35.6586 15.3943 35.5561 15.9596C35.4536 16.5248 35.5228 17.1078 35.7547 17.6333V17.7727C35.9756 18.2881 36.3423 18.7276 36.8098 19.0372C37.2773 19.3468 37.8251 19.5129 38.3858 19.5151H38.682C39.6062 19.5151 40.4926 19.8823 41.1461 20.5358C41.7997 21.1894 42.1668 22.0757 42.1668 23C42.1668 23.9242 41.7997 24.8106 41.1461 25.4641C40.4926 26.1177 39.6062 26.4848 38.682 26.4848H38.5252C37.9645 26.4871 37.4167 26.6532 36.9492 26.9628C36.4817 27.2724 36.115 27.7119 35.8941 28.2273Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className={`font-semibold text-xl md:text-2xl text-white`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/90">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card2({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-60 w-full ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        background: `url(${data.cardImage.node.link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`flex p-5 sm:p-6 items-end h-full`}>
        <div className={`flex flex-col gap-3 `}>
          <div className="flex items-center justify-start ">
            <div className="flex items-center justify-start w-16 h-16 rounded-lg">
              <Image
                src={"/assets/svg/bill-list.svg"}
                className="img-white w-8 h-8"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
          <div>
            <h3 className={`font-semibold text-xl md:text-2xl text-white`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/90">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card3({ className, data }: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative aspect-auto h-104 w-full rainbow-gradient-border-hover pb-8 ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        backgroundColor: "#83B6FF", // base background
      }}
    >
      {/* background image on top of bg color */}
      {data.cardImage?.node?.link && (
        <Image
          src={data.cardImage.node.link}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 z-0"
        />
      )}

      {/* content */}
      <div className="flex p-5 sm:p-6 items-start h-full relative z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center bg-[#2B59FF] w-16 h-16 rounded-lg">
            <Image
              src={"/assets/svg/file-02.svg"}
              className="img-white w-10 h-10"
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl md:text-2xl text-black">
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-900">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card4({ className, data }: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative aspect-auto h-108 w-full rainbow-gradient-border-hover pb-8 ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        backgroundColor: "#FDE569", // base background
      }}
    >
      {/* background image on top of bg color */}
      {data.cardImage?.node?.link && (
        <Image
          src={data.cardImage.node.link}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 z-0"
        />
      )}

      {/* content */}
      <div className="flex p-5 sm:p-6 items-end h-full relative z-10">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-semibold text-xl md:text-[26px] text-black">
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-900">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card5({ className, data }: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative aspect-auto h-80 w-full rainbow-gradient-border-hover pb-8 ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        backgroundColor: "#FFC1C3", // base background
      }}
    >
      {/* background image on top of bg color */}
      {data.cardImage?.node?.link && (
        <Image
          src={data.cardImage.node.link}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 z-0"
        />
      )}

      {/* content */}
      <div className="flex p-5 sm:p-6 items-center h-full relative z-10">
        <div className="flex flex-col gap-3 w-2/3">
          <div>
            <h3 className="font-semibold text-xl md:text-[26px] text-black">
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-900">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card7({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-60 w-full ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        background: `url(${data.cardImage.node.link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`flex p-5 sm:p-6 items-end h-full`}>
        <div className={`flex flex-col gap-3 `}>
          <div className="flex items-center justify-start ">
            <div className="flex items-center justify-start w-16 h-16 rounded-lg">
              <Image
                src={"/assets/svg/bar-chart-square-01.svg"}
                className="img-white w-10 h-10"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className={`font-semibold text-xl md:text-2xl text-white`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/90">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card6({ className, data }: CardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative aspect-auto h-104 w-full rainbow-gradient-border-hover pb-8 ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
      }}
    >
      {/* background image on top of bg color */}
      {data.cardImage?.node?.link && (
        <Image
          src={data.cardImage.node.link}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 z-0"
        />
      )}

      {/* content */}
      <div className="flex p-5 sm:p-6 items-start h-full relative z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-start w-16 h-16 rounded-lg">
            <Image
              src={"/assets/svg/atom-01.svg"}
              className="img-white w-8 h-8"
              alt=""
              width={64}
              height={64}
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl md:text-2xl text-white">
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/50">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card8({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-78 py-4 w-full ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        background: `url(${data.cardImage.node.link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`flex p-5 sm:p-6 items-end h-full`}>
        <div className={`flex flex-col gap-3`}>
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start w-16 h-16 rounded-lg">
              <Image
                src={"/assets/svg/layers-three-01.svg"}
                className="img-white w-10 h-10"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
          <div>
            <h3 className={`font-semibold text-xl md:text-2xl text-white`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/90 w-3/4">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card9({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-78 py-4 w-full ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
        background: `#83B6FF`,
      }}
    >
      <div className={`flex p-5 sm:p-6 items-start h-full`}>
        <div className={`flex flex-col gap-3`}>
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#2B59FF]">
              <Image
                src={"/assets/svg/grid-01.svg"}
                className="img-white w-8 h-8"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
          <div>
            <h3 className={`font-semibold text-xl md:text-2xl text-black`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-900">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Card10({ className, data }: CardProps) {
  console.log("Card data:", data);
  const cardRef = useRef<HTMLElement | null>(null);

  // keep torch centered on the hovered card even if window resizes
  useEffect(() => {
    function recenterIfHover() {
      const hovered = document.querySelector(
        "article[data-hover='1']"
      ) as HTMLElement | null;
      if (!hovered) return;
      const r = hovered.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--torch-x",
        `${r.left + r.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--torch-y",
        `${r.top + r.height / 2}px`
      );
    }
    window.addEventListener("resize", recenterIfHover);
    return () => window.removeEventListener("resize", recenterIfHover);
  }, []);

  function handleEnter() {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--torch-x",
      `${r.left + r.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--torch-y",
      `${r.top + r.height / 2}px`
    );
    el.setAttribute("data-hover", "1");
    document.body.classList.add("__torch-on");
  }

  function handleLeave() {
    const el = cardRef.current;
    if (el) el.removeAttribute("data-hover");
    document.body.classList.remove("__torch-on");
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative  aspect-auto h-78 py-4 w-full ${className}`}
      style={{
        boxShadow: "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66",
      }}
    >
      <div className={`flex p-5 sm:p-6 items-start h-full`}>
        <div className={`flex flex-col gap-3`}>
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start w-16 h-16 rounded-lg">
              <Image
                src={"/assets/svg/tablet-01.svg"}
                className="img-white w-10 h-10"
                alt=""
                width={64}
                height={64}
              />
            </div>
          </div>
          <div>
            <h3 className={`font-semibold text-xl md:text-2xl text-white`}>
              {data.heading}
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-100/50">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}