import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav.js";

const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="My Logo image"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
