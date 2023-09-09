import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title text-5xl">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="border rounded text-red-600" to="/docs/intro">
            Tech Village
          </Link>
        </div>
      </div>
    </header>
  );
}

const HomePage = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="flex justify-center">
              <div className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md">
                <p className="mr-2 inline-block text-white text-sm">
                  AgriVage is My Dream
                </p>
                <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
                Kuluru Vineeth{" "}
                <div>
                  <span className="text-blue-500">Tech Village</span>
                </div>
                (TypeScript)
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                Kuluru Vineeth Tech Village is a open-source project, crafted
                for Full Stack Software Developers/Engineers
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/docs/intro"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
