const cors = require("cors");
const express = require("express");
const uuid = require("uuid");

export const app = express();
app.use(cors());
app.use(express.json()); // used in-place of body-parser