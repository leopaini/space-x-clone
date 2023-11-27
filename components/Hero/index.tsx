"use client";

import React from "react";
import clsx from "clsx";
import CountUp from "react-countup";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className={clsx("container", styles.hero)}>
        <div className={styles.heroInfo}>
          <h1>MAKING HUMANITY MULTIPLANETARY</h1>
          <h2>
            Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is
            working on a next generation of fully reusable launch vehicles that
            will be the most powerful ever built, capable of carrying humans to
            Mars and other destinations in the solar system.
          </h2>
        </div>
        <div className={styles.launchInfo}>
          <ul>
            <li>
              <span>
                <CountUp end={285} duration={2} start={0} />
              </span>
              TOTAL LAUNCHES
            </li>
            <li>
              <span>
                <CountUp end={248} duration={2} start={0} />
              </span>
              TOTAL LANDINGS
            </li>
            <li>
              <span>
                <CountUp end={220} duration={2} start={0} />
              </span>
              TOTAL REFLIGHTS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
