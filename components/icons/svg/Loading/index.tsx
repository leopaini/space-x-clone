import React from "react";
import clsx from "clsx";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <svg className={styles.loading} viewBox="0 0 84.6 84.6">
      <defs>
        <filter id="stickyFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="filter"
          />
          <feComposite in="SourceGraphic" in2="filter" operator="atop" />
        </filter>
        <linearGradient
          id="gradient"
          className={styles.gradient}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="40%"
          gradientTransform="rotate(45)"
        >
          <stop offset="0%" />
          <stop offset="100%" />
        </linearGradient>
      </defs>
      <clipPath id="clip">
        <circle cx="42.3" cy="42.3" r="41.6" />
      </clipPath>
      <g clipPath="url(#clip)">
        <path className={styles.background} d="M0 0h84.6v84.6H0z" />
        <g className={styles.exhaust}>
          <path
            className={styles.gradientBox}
            d="M2.37244 65.5981l28.84968-28.84968 16.54614 16.54614-28.84968 28.84968z"
          />
          <path
            className={styles.gradientBox}
            d="M6.35189 69.55189l28.84968-28.84968 8.34378 8.34378-28.84968 28.84968z"
          />
          <g className={styles.filteredGroup}>
            <path
              className={clsx(styles.line1, styles.line, styles.lineThick)}
              d="M47.7 49.6L13.4 83.9"
            />
            <path
              className={clsx(styles.line2, styles.line, styles.lineThick)}
              d="M42.3 42.3L8 76.6"
            />
            <path
              className={clsx(styles.line3, styles.line, styles.lineThick)}
              d="M33.5 38.5L-.8 72.8"
            />

            <path
              className={clsx(styles.line4, styles.line, styles.lineThick)}
              d="M45 45.82L10.7 80.12"
            />
            <path
              className={clsx(styles.line5, styles.line, styles.lineThick)}
              d="M38.16 40.06L3.86 74.36"
            />

            <path
              className={clsx(styles.line6, styles.line, styles.lineStatic)}
              d="M39.46 41.15L18.91 61.7"
            />
            <path
              className={clsx(styles.line7, styles.line, styles.lineStatic)}
              d="M43.57 43.77L23.02 64.32"
            />
          </g>
        </g>
        <g className={styles.rotate}>
          <g className={styles.rumble}>
            <path
              className={styles.arrow}
              d="M60.8 27.2c.6-2.1-1.3-4-3.4-3.4L19.5 35.3c-2.2.7-2.6 3.6-.8 4.9l15.8 7.6c1.1.5 2 1.4 2.5 2.6L44.4 66c1.3 1.9 4.2 1.4 4.9-.8l11.5-38z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
