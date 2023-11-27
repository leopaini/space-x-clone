"use client";

import React, { Suspense } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { ResponseLaunch } from "@/types";
import { useSuspenseQuery } from "@apollo/client";
import { GET_LAUNCH_BY_ID } from "@/query/schema";
import { SuspenseFallback } from "@/components";

import styles from "./LaunchDetails.module.css";
import { BackIcon } from "../icons";

function Details({ id }: { id: string }) {
  const { data, error } = useSuspenseQuery<ResponseLaunch>(GET_LAUNCH_BY_ID, {
    variables: { id }
  });

  const localeDate = new Date(
    data?.launch?.launch_date_local
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const imgSrc =
    data?.launch?.links?.flickr_images[0] || "/launches/portrait_no_image.jpg";

  return (
    <div className={clsx("container", styles.launchDetails)}>
      <Link href="/" className={styles.link}>
        <BackIcon />
        <span>Back to launches</span>
      </Link>
      <div className={styles.portrait}>
        <Image
          height={570}
          width={500}
          src={imgSrc}
          priority={true}
          className={styles.image}
          sizes="100vw, 70vw, 50vw, 30vw"
          alt={data.launch.mission_name}
        />
        {/* <img src={data?.launch?.links?.flickr_images[0]} /> */}
      </div>

      <div className={styles.launchInfo}>
        <h4>{localeDate}</h4>
        <h1>{data.launch.mission_name} mission</h1>
        <p>{data.launch.details || "No description"}</p>
      </div>
    </div>
  );
}

export default function LaunchDetails({ id }: { id: string }) {
  return (
    <div className={clsx("container", styles.launchDetails)}>
      <Suspense
        fallback={
          <div className={styles.loadingData}>
            <SuspenseFallback />
          </div>
        }
      >
        <Details id={id} />
      </Suspense>
    </div>
  );
}
