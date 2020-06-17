import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

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
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology is a recipe for revolution. Get a free online estimate instantly!"
        />

        <meta
          property="og:title"
          content="Bringing New Age Technology to West Africa | The Revolution"
          key="og:title"
        />

        <meta property="og:url" content="arc.com/revolution" key="og:url" />

        <link rel="canonical" key="canonical" href="arc.com/revolution" />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h1"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? "300px" : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : "right"}
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              ursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              ursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              ursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              ursus mattis molestie a iaculis at erat pellentesque. Semper
              viverra nam libero justo laoreet. Viverra aliquet eget sit amet
              tellus cras. Faucibus pulvinar elementum integer enim neque
              volutpat ac. Quis hendrerit dolor magna eget est lorem ipsum.
              Justo eget magna fermentum iaculis
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWIdth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#b3b3b3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/consultationIcon.svg"
            alt="handshake"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/mockupIcon.svg"
            alt="basic website design outline"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#a67c52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/designIcon.svg"
            alt="paint brush"
            width="100%"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/buildIcon.svg"
            alt="building construction site"
            width="100%"
            style={{ maxWidth: matchesMD ? 400 : 1000 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#c1272d", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fermentum leo vel orci porta non pulvinar. Nec nam aliquam sem et
              tortor consequat. Id velit ut tortor pretium viverra suspendisse
              potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/launchIcon.svg"
            alt="rocket"
            width="100%"
            style={{ maxWidth: 100 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8e45ce", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar. Nec nam aliquam sem et tortor consequat.
              Id velit ut tortor pretium viverra suspendisse potenti nullam.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/maintainIcon.svg"
            alt="wrench tightening bolts"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29abe2", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Fringilla ut morbi tincidunt augue. In nulla posuere sollicitudin
              aliquam. Fermentum leo vel orci porta non pulvinar. Nec nam
              aliquam sem et tortor consequat. Id velit ut tortor pretium
              viverra suspendisse potenti nullam. Fringilla ut morbi tincidunt
              augue. In nulla posuere sollicitudin aliquam. Fermentum leo vel
              orci porta non pulvinar.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/iterateIcon.svg"
            alt="falling dominoes"
            width="100%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
