"use client";

import { usePathname } from "next/navigation";

// Utility to get title from path
const getPageTitle = (pathname) => {
  const parts = pathname.split("/");
  const title = parts[parts.length - 1] || "Dashboard";
  return title.charAt(0).toUpperCase() + title.slice(1);
};

const DashboardNavbar = () => {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
      <div
      style={{
        position: "sticky",
        top: "56px", // height of your fixed root navbar
        zIndex: 1020,
        backgroundColor: "#f8f9fa",
        height: "56px",
        display: "flex",
        alignItems: "center",
      }} className="mt-3 mb-3 shadow-sm p-1"
    >
      <div className="p-3"><h5 className="mb-0">{pageTitle}</h5></div>
    </div>
  );
};

export default DashboardNavbar;