import clsx from "clsx";
import { LogoIcon } from "@/components/icons";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={clsx("container", styles.header)}>
        <span className={styles.logo}>
          <LogoIcon />
        </span>
        {/* <nav></nav> */}
      </div>
    </header>
  );
}
