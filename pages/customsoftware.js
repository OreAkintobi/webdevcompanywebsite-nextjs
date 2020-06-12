import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data.js";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development & Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />

        <meta
          property="og:title"
          content="Bringing New Age Technology to West Africa | Custom Software Development"
          key="og:title"
        />

        <meta property="og:url" content="arc.com/customsoftware" key="og:url" />

        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <img src="/assets/backArrow.svg" alt="back to services" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros
              donec ac odio tempor. Viverra mauris in aliquam sem fringilla ut.
              Est placerat in egestas erat imperdiet.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Elit ut aliquam purus sit amet
              luctus venenatis lectus.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Cursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Nisl pretium fusce id velit. Velit dignissim sodales ut eu sem.
              Habitant morbi tristique senectus et netus et malesuada fames. Ut
              enim blandit volutpat maecenas volutpat blandit aliquam etiam.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to iOS/Android App Development"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Cursus mattis molestie a iaculis at erat pellentesque. Semper
                viverra nam libero justo laoreet. Viverra aliquet eget sit amet
                tellus cras. Faucibus pulvinar elementum integer enim neque
                volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
                Justo eget magna fermentum iaculis.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Nisl pretium fusce id velit. Velit dignissim sodales ut eu sem.
                Habitant morbi tristique senectus et netus et malesuada fames.
                Ut enim blandit volutpat maecenas volutpat blandit aliquam
                etiam.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Cursus mattis molestie a iaculis at erat pellentesque. Semper
                viverra nam libero justo laoreet. Viverra aliquet eget sit amet
                tellus cras. Faucibus pulvinar elementum integer enim neque
                volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
                Justo eget magna fermentum iaculis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/roots.svg"
              alt="tree with roots"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center">
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Cursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-between"
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Cursus mattis molestie a iaculis at erat pellentesque. Semper
                viverra nam libero justo laoreet. Viverra aliquet eget sit amet
                tellus cras.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Faucibus pulvinar elementum integer enim neque volutpat ac. Quis
                hendrerit dolor magna eget est lorem ipsum. Justo eget magna
                fermentum iaculis.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Nisl pretium fusce id velit. Velit dignissim sodales ut eu sem.
                Habitant morbi tristique senectus et netus et malesuada fames.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Cursus mattis molestie a iaculis at erat pellentesque. Semper
                viverra nam libero justo laoreet. Viverra aliquet eget sit amet
                tellus cras. Faucibus pulvinar elementum integer enim neque
                volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
                Justo eget magna fermentum iaculis.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Nisl pretium fusce id velit. Velit dignissim sodales ut eu sem.
                Habitant morbi tristique senectus et netus et malesuada fames.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
