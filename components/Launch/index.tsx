import Link from "next/link";
import { getImageUrlOrRdm } from "@/utils";
import type { Launch, LaunchProps } from "@/types";

import styles from "./Launch.module.css";

export default function LaunchCluster({ launch }: LaunchProps) {
  const backgroundImg = getImageUrlOrRdm(launch.links.flickr_images);
  const localeDate = new Date(launch.launch_date_local).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <Link href={`/${launch.id}`}>
      <figure
        className={styles.card}
        style={{ backgroundImage: backgroundImg }}
      >
        <figcaption>
          <span className={styles.launchInfo}>
            <h2>{launch.mission_name}</h2>
            <p>Rocket: {launch.rocket.rocket_name}</p>
            <p className={styles.date}>{localeDate}</p>
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}
