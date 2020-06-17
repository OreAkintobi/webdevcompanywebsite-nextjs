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

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

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

const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Development & Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile apps made easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android."
        />

        <meta
          property="og:title"
          content="Bringing New Age Technology to West Africa | iOS/Android App Development"
          key="og:title"
        />

        <meta property="og:url" content="arc.com/mobileapps" key="og:url" />

        <link rel="canonical" key="canonical" href="arc.com/mobileapps" />
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
              href="/customsoftware"
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <img
                src="/assets/backArrow.svg"
                alt="back to custom software page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              Nisl pretium fusce id velit. Velit dignissim sodales ut eu sem.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/websites"
              onClick={() => {
                setSelectedIndex(3);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to website development"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : undefined}
            >
              Integration
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
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Cursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          style={{ marginTop: matchesSM ? "10em" : 0 }}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : "right"}
            >
              Simultaneous Platform Support
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
              tellus cras.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              Cursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="swiss army knife" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" align="center">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="tear-one-off-sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>

        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/increaseEngagement.svg"
              alt="app with notification"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
