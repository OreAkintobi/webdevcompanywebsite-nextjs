import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "32em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "27em",
      width: "20em",
      maxHeight: "380px",
      maxWidth: "300px",
    },
  },
}));

const About = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>

      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          ut morbi tincidunt augue. In nulla posuere sollicitudin aliquam.
          Fermentum leo vel orci porta non pulvinar. Nec nam aliquam sem et
          tortor consequat.
        </Typography>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "colum" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block!
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                E pluribus unum. Ursus mattis molestie a iaculis at erat
                pellentesque. Semper viverra nam libero justo laoreet. Viverra
                aliquet eget sit amet tellus cras. Faucibus pulvinar elementum
                integer enim neque volutpat ac. Quis hendrerit dolor magna eget
                est lorem ipsum. Justo eget magna fermentum iaculis.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Fringilla ut morbi tincidunt augue. In nulla posuere
                sollicitudin aliquam. Fermentum leo vel orci porta non pulvinar.
                Nec nam aliquam sem et tortor consequat. Id velit ut tortor
                pretium viverra suspendisse potenti nullam.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                E pluribus unum. Ursus mattis molestie a iaculis at erat
                pellentesque. Semper viverra nam libero justo laoreet. Viverra
                aliquet eget sit amet tellus cras. Faucibus pulvinar elementum
                integer enim neque volutpat ac. Quis hendrerit dolor magna eget
                est lorem ipsum. Justo eget magna fermentum iaculis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src="/assets/history.svg"
              alt="quill pen"
              style={{ maxHeight: matchesMD ? "200px" : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Ore Akintobi, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding really late.
          </Typography>
        </Grid>

        <Grid item>
          <Avatar
            alt="founder"
            src="/assets/founder.jpg"
            className={classes.avatar}
          />
        </Grid>

        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                Semper viverra nam libero justo laoreet. Viverra aliquet eget
                sit amet tellus cras. Faucibus pulvinar elementum integer enim
                neque volutpat ac. Quis hendrerit dolor magna eget est lorem
                ipsum. Justo eget magna fermentum iaculis.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                E pluribus unum. Ursus mattis molestie a iaculis at erat
                pellentesque. Semper viverra nam libero justo laoreet. Viverra
                aliquet eget sit amet tellus cras. Faucibus pulvinar elementum
                integer enim neque volutpat ac. Quis hendrerit dolor magna eget
                est lorem ipsum. Justo eget magna fermentum iaculis.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                alt="yearbook"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">a yearbook page</Typography>
            </Grid>
          </Grid>

          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                Semper viverra nam libero justo laoreet. Viverra aliquet eget
                sit amet tellus cras. Faucibus pulvinar elementum integer enim
                neque volutpat ac. Quis hendrerit dolor magna eget est lorem
                ipsum. Justo eget magna fermentum iaculis.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                E pluribus unum. Ursus mattis molestie a iaculis at erat
                pellentesque. Semper viverra nam libero justo laoreet. Viverra
                aliquet eget sit amet tellus cras. Faucibus pulvinar elementum
                integer enim neque volutpat ac. Quis hendrerit dolor magna eget
                est lorem ipsum. Justo eget magna fermentum iaculis.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src="/assets/puppy.svg"
                alt="a puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">a puppy</Typography>
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

export default About;
