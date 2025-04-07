"use client";

import { usePathname } from "next/navigation";
import styles from "./DashboardTitlebar.module.css";

// Utility to get title from path
const getPageTitle = (pathname) => {
  const parts = pathname.split("/");
  const title = parts[parts.length - 1] || "Dashboard";
  return title.charAt(0).toUpperCase() + title.slice(1);
};

const DashboardTitlebar = () => {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
      <div
      className={`${styles.customTitleBar} pt-0 mb-5`}
    >
      <div className="p-1">
        <p className={`${styles.customPageTitle} mb-0`}>{pageTitle}</p>
      </div>
    </div>
  );
};

export default DashboardTitlebar;