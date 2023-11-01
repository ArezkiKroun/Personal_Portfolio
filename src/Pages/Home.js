import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
import "../styles/Home.css";
import cv_i from "../pdf/cv_i.pdf";
import gitlab from "../images/gitlab.png";
import Logo from "../images/mt.png";
import python from "../images/python.png";
import spring from "../images/spring.png";
import xml from "../images/xml.png";
import bootStrap from "../images/bootstrap.png";
import node from "../images/Node.png";
import oracle from "../images/Oracle.png";
import php from "../images/php.png";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.png";
import react from "../images/react.png";
import java from "../images/java.png";
import c from "../images/c.png";
import mu from "../images/mu.png";
import mysql from "../images/mysql.png";
import net from "../images/net.png";
import angular from "../images/angular.png";
import ts from "../images/ts.png";
import android from "../images/android.png";
import mongodb from "../images/mongodb.png";
import postgres from "../images/postgres.png";
import macos from "../images/macos.png";
import linux from "../images/linux.png";
import windows from "../images/windows.png";

import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box className="home">
      <Box className="about">
        <Typography>
          <h2>Hello, my name is KROUN Arezki</h2>
        </Typography>
        <Box className="prompt">
          <p>
            <h4>
              {" "}
              A software devloper with a passion for learning and creating{" "}
            </h4>
          </p>
          <a href="https://github.com/ArezkiKroun">
            <GitHubIcon></GitHubIcon>
          </a>
          <a href="#">
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a href="#">
            <EmailIcon></EmailIcon>
          </a>
          <a href="https://gitlab-dpt-info-sciences.univ-rouen.fr/m1info/gest-notes">
            <img src={gitlab} />
          </a>
        </Box>

        <div className="cv">
          <p>CV</p>
          <a href={cv_i} download>
            {" "}
            <PictureAsPdf></PictureAsPdf>{" "}
          </a>
        </div>
      </Box>

      <Box className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li>
            <h2>Front-End Development</h2>
            <span>
              <img src={html} />
              <img src={css} />
              <img src={react} />
              <img src={angular} />
              <img src={android} />
              <img src={Logo} />
              <img src={bootStrap} />
              <img src={mu} />
            </span>
          </li>
          <li>
            <h2>Back-End Development</h2>
            <span>
              <img src={spring} />
              <img src={net} />
              <img src={xml} />
              <img src={node} />
              <img src={php} />
            </span>
          </li>
          <li>
            <h2>Programming Language</h2>
            <span>
              <img src={ts} />
              <img src={js} />

              <img src={java} />
              <img src={python} />
              <img src={c} />
            </span>
          </li>
          <li>
            <h2>Database Management</h2>
            <span>
              <img src={mysql} />
              <img src={postgres} />

              <img src={mongodb} />
              <img src={oracle} />
            </span>
          </li>
          <li>
            <h2>Operating System</h2>
            <span>
              <img src={windows} />
              <img src={linux} />
              <img src={macos} />
            </span>
          </li>
        </ol>
      </Box>
    </Box>
  );
}

export default Home;
