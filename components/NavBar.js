import styles from "@styles/NavBar.module.css";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

const NavBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false); 
  const isBigScreen = useMediaQuery("(min-width:1201px)");
  const [mediaMatch, setMediaMatch] = useState(true);
  const burgerMenuClasses = [
    "bm-burger-button",
    "bm-burger-bars",
    "bm-burger-bars-hover",
    "bm-cross-button",
    "bm-cross",
    "bm-menu-wrap",
    "bm-morph-shape",
    "bm-item-list",
    "bm-item",
    "bm-overlay",
  ];

  useEffect(() => {
    setMediaMatch(isBigScreen);
  }, [isBigScreen]);

  const links = [
    { id: 0, name: "Home", href: "/" },
    { id: 1, name: "Technology", href: "/technology" },
    { id: 2, name: "Science", href: "/science" },
    { id: 3, name: "Philosophy", href: "/philosophy" },
  ];

  const extras = [
    { id: 0, name: "Blog", href: "/blog" },
    { id: 1, name: "Poetry", href: "/poetry" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const toggleExtras = () => {
    setIsExtrasOpen((prev) => !prev); // Toggle the Extras menu visibility
  };

  const bigScreen = (
    <section
      className={
        props.mode === "dark" ? styles.parent : styles.parentLight
      }
    >
      <h2
        className={[
          styles.navbarLogo,
          props.mode === "dark" ? null : styles.light,
        ].join(" ")}
      >
        SK
      </h2>
      <ul className={styles.navList} style={{ listStyleType: "none" }}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={
                props.mode === "dark"
                  ? styles.navLink
                  : styles.navLinkLight
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className={styles.dropdown}>
          <span
            className={
              props.mode === "dark"
                ? styles.navLink
                : styles.navLinkLight
            }
          >
            Extras
          </span>
          <ul
            className={
              props.mode === "dark"
                ? styles.dropdownMenu
                : styles.dropdownMenuLight
            }
          >
            {extras.map((extra) => (
              <li key={extra.id}>
                <Link
                  href={extra.href}
                  className={
                    props.mode === "dark"
                      ? styles.navLink
                      : styles.navLinkLight
                  }
                >
                  {extra.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <span
        onClick={() => {
          props.toggleMode(props.mode === "light" ? "dark" : "light");
        }}
      >
        <i
          className={`fa-solid fa-${
            props.mode === "dark" ? "moon" : "sun"
          }`}
          style={{ color: props.mode === "dark" ? null : "#171717" }}
        />
      </span>
    </section>
  );

  const smallScreen = (
    <section
      className={
        props.mode === "dark" ? styles.parent : styles.parentLight
      }
    >
      <h2
        className={[
          styles.navbarLogo,
          props.mode === "dark" ? null : styles.light,
        ].join(" ")}
      >
        SK
      </h2>
      <Menu
        className={burgerMenuClasses.join(" ")}
        right
        width={150}
        isOpen={isMenuOpen}
        onStateChange={handleMenuChange}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={
              props.mode === "dark"
                ? styles.navLink
                : styles.navLinkLight
            }
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
        <div>
          <span
            className={
              props.mode === "dark"
                ? styles.navLink
                : styles.navLinkLight
            }
            onClick={toggleExtras} 
          >
            Extras
          </span>
          {isExtrasOpen && ( 
            <ul style={{ listStyleType: "none" }}
            >
              {extras.map((extra) => (
                <li key={extra.id}>
                  <Link
                    href={extra.href}
                    className={
                      props.mode === "dark"
                        ? styles.navLink
                        : styles.navLinkLight
                    }
                    onClick={closeMenu}
                  >
                    {extra.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <span
          onClick={() => {
            props.toggleMode(
              props.mode === "light" ? "dark" : "light"
            );
          }}
        >
          <i
            className={`fa-solid fa-${
              props.mode === "dark" ? "moon" : "sun"
            }`}
            style={{
              color: props.mode === "dark" ? null : "#171717",
            }}
          />
        </span>
      </Menu>
    </section>
  );

  return mediaMatch ? bigScreen : smallScreen;
};

export default NavBar;