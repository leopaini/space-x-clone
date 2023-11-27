import clsx from "clsx";
import { LoadingIcon } from "../icons";

import styles from "./SuspenseFallback.module.css";

export default function SuspenseFallback() {
  return (
    <div className={clsx("container", styles.suspense)}>
      <span className={styles.icon}>
        <LoadingIcon />
      </span>
      <span className={styles.text}>Fetching info...</span>
    </div>
  );
}
