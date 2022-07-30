import cors from "cors";
import express from "express";

const createServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json()); // used in-place of body-parser
    return app;
}

export default createServer;
