import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

// Material UI styles parsed into modal to avoid inline styling when possible.
const useStyles = makeStyles(() => ({
  navLinks: {
    marginLeft: 10,
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: 20,
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  // Navbar provides simpler navigation using react-router.
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          City weather Service
        </Typography>
        <div className={classes.navLinks}>
          <Link to="/" className={classes.link}>
            Search
          </Link>
          <Link to="/admin" className={classes.link}>
            Admin
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
