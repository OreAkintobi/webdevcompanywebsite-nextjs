import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();

  const socialIcons = [
    {
      href: "http://www.facebook.com",
      alt: "facebook",
      src: "/assets/facebook.svg",
    },
    {
      href: "http://www.twitter.com",
      alt: "twitter",
      src: "/assets/twitter.svg",
    },
    {
      href: "http://www.instagram.com",
      alt: "instagram",
      src: "/assets/instagram.svg",
    },
  ];

  const revolution = ["The Revolution", "Vision", "Technology", "Process"];

  const services = [
    { text: "Services", route: "/services", index: 0 },
    { text: "Custom Software Development", route: "/customsoftware", index: 1 },
    { text: "iOS/Android Development", route: "/mobileapps", index: 2 },
    { text: "Website Development", route: "/websites", index: 3 },
  ];

  const about = ["About Us", "History", "Team"];

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/"
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              {services.map((service, index) => (
                <Grid
                  item
                  key={index}
                  component={Link}
                  href={service.route}
                  className={classes.link}
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(service.index);
                  }}
                >
                  {service.text}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              {revolution.map((text, index) => (
                <Grid
                  item
                  key={index}
                  component={Link}
                  href="/revolution"
                  className={classes.link}
                  onClick={() => setValue(2)}
                >
                  {text}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              {about.map((item, index) => (
                <Grid
                  item
                  key={index}
                  component={Link}
                  href="/about"
                  className={classes.link}
                  onClick={() => setValue(3)}
                >
                  {item}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/contact"
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 294.4 180"
        className={classes.adornment}
      >
        <style>{`.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 500}.st3{font-size:8px}`}</style>
        <path d="M294.4 0L166.3 227H-4V0z" />
        <path fill="none" d="M111-24v376" />
        <text transform="translate(5 175)" className="st1 st2 st3">
          © Arc Development 2019
        </text>
        <text transform="translate(147.442 175)" className="st1 st2 st3">
          Wichita, KS
        </text>
      </svg>
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        {socialIcons.map((icon, index) => (
          <Grid
            item
            key={index}
            component={"a"}
            href={icon.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt={icon.alt} src={icon.src} className={classes.icon} />
          </Grid>
        ))}
      </Grid>
    </footer>
  );
}
