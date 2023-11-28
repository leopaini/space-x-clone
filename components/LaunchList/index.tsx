"use client";

import clsx from "clsx";
import { Suspense } from "react";
import usePagination from "@/hooks/usePagination";
import { RotatingLines } from "react-loader-spinner";
import { SuspenseFallback, LaunchCluster } from "@/components";

import styles from "./LaunchList.module.css";

function Launches() {
  const { data, handleLoadMore, loading, scrollRef } = usePagination();

  return (
    <div className={clsx("container", styles.launchList)}>
      <div className={styles.clusters} ref={scrollRef}>
        {data.launches.map((launch) => (
          <LaunchCluster key={launch.id} launch={launch} />
        ))}
      </div>

      <div className={styles.moreInfo}>
        {loading ? (
          <div className={styles.loading}>
            <RotatingLines
              width="30"
              strokeColor="var(--clr-primary-400)"
              strokeWidth="4"
              animationDuration="0.75"
            />
            <span className={styles.text}>Loading</span>
          </div>
        ) : (
          <a className="button" onClick={handleLoadMore}>
            <span className="hover"></span>
            <span className="text">Load more</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function LaunchList() {
  return (
    <section>
      <Suspense fallback={<SuspenseFallback />}>
        <Launches />
      </Suspense>
    </section>
  );
}
