"use client";

import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const MikeRowehl: NextPage = () => {
  return (
    <div className="flex items-center flex-col grow pt-10">
      <Image src="/MikeRowehl.webp" alt="Mike Rowehl" width={120} height={120} className="rounded-full" />
      <h1 className="text-center">
        <span className="block text-4xl font-bold">Mike Rowehl</span>
      </h1>
      <div className="flex items-center">
        <Address address="0x9c9234420501c820f73cfA44e822D27e1baAb4D5" />
      </div>
      <p className="max-w-prose">
        I&apos;m a long time software developer, but a relative newcomer when it comes to blockchain development. I used
        to live in Silicon Valley and have been keeping a{" "}
        <a
          href="https://rowehl.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          target="_blank"
        >
          technology focused personal blog
        </a>{" "}
        that goes back decades now. I&apos;ve been a founder or on the launch team for a bunch of startups over the
        years. And I was one of the people who started a community group called Mobile Monday in the SF Bay Area that
        ran free meetups for mobile developers. Now I&apos;ve moved out to central California and don&apos;t have a new
        major project yet.
      </p>
      <p className="max-w-prose">
        <a
          href="https://github.com/mikerowehl"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          target="_blank"
        >
          Github
        </a>
        {" | "}
        <a
          href="https://rowehl.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          target="_blank"
        >
          Blog
        </a>
        {" | "}
        <a
          href="https://mastodon.social/home"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          target="_blank"
        >
          Mastodon
        </a>
        {" | "}
        <a
          href="https://x.com/miker"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          target="_blank"
        >
          X/Twitter
        </a>
      </p>
    </div>
  );
};

export default MikeRowehl;
