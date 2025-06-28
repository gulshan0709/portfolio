import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import css from "../app/assets/svg/skills/css.svg";
import django from "../app/assets/svg/skills/django.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import gcp from "../app/assets/svg/skills/gcp.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import numpy from "../app/assets/svg/skills/numpy.svg";
import opencv from "../app/assets/svg/skills/opencv.svg";
import php from "../app/assets/svg/skills/php.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import python from "../app/assets/svg/skills/python.svg";
import pytorch from "../app/assets/svg/skills/pytorch.svg";
import react from "../app/assets/svg/skills/react.svg";
import pandas from "../app/assets/svg/skills/pandas.svg";
import fastapi from "../app/assets/svg/skills/fastapi.svg";
import postman from "../app/assets/svg/skills/postman_logo.svg";
import jira from "../app/assets/svg/skills/jira.svg";
import kafka from "../app/assets/svg/skills/kafka.svg";
import webscoket from "../app/assets/svg/skills/websocket.svg";
import github from "../app/assets/svg/skills/github.svg";
import sqlite from "../app/assets/svg/skills/sqlite.svg";
import vectordb from "../app/assets/svg/skills/vectorDb.svg";
import qdrant from "../app/assets/svg/skills/qdrant.svg";
import node from "../app/assets/svg/skills/node.svg";
import redux from "../app/assets/svg/skills/redux.svg";
import laravel from "../app/assets/svg/skills/laravel.svg";
import microfrontend from "../app/assets/svg/skills/microfrontend.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import nginx from "../app/assets/svg/skills/nginx.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "node":
      return node;
    case "nginx":
      return nginx;
    case "redux":
      return redux;
    case "typescript":
      return typescript;
    case "laravel":
      return laravel;
    case "microfrontend":
      return microfrontend;
    case "microservices":
      return microfrontend;
    case "vectordb":
      return vectordb;
    case "qdrant":
      return qdrant;
    case "jira":
      return jira;
    case "kafka":
      return kafka;
    case "webscoket":
      return webscoket;
    case "github":
      return github;
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "php":
      return php;
    case "python":
      return python;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "pytorch":
      return pytorch;
    case "fastapi":
      return fastapi;
    case "postman":
      return postman;
    case "pandas":
      return pandas;
    case "sqlite":
      return sqlite;
    default:
      break;
  }
};
