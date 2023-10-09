"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  
  const styles = {
    menu: "flex items-center gap-8",
    list: {
      base: "",
      link: {
        base: "w-auto h-10 px-4 flex items-center border-b-4 hover:border-b-emerald-500 transition-all",
        active: "border-b-emerald-500",
        inactive: "border-b-transparent",
      },
    },
  };

  return (
    <ul className={styles.menu}>
      <li className={styles.list.base}>
        <Link
          href={"/"}
          className={cn(
            styles.list.link.base,
            pathname === "/"
              ? styles.list.link.active
              : styles.list.link.inactive
          )}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={cn(
            styles.list.link.base,
            pathname === "/about"
              ? styles.list.link.active
              : styles.list.link.inactive
          )}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/blog"}
          className={cn(
            styles.list.link.base,
            pathname === "/blog"
              ? styles.list.link.active
              : styles.list.link.inactive
          )}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default Links;
