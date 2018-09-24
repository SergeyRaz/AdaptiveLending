import express from "express";
import bodyParser from "body-parser";
import path from "path";
import history from "connect-history-api-fallback";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";
import auth from "./routes/auth";
import mongoose from "mongoose";
import session from "express-session";
// Connect mongo DB
mongoose.connect(
  "mongodb://admin:torial1988@ds046037.mlab.com:46037/lessonsdb",
  { useNewUrlParser: true }
);

const port = process.env.PORT || 5000;
const app = express();

// Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
);

app.get("/", function(req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write(`<p>views: ${req.session.views}</p>`);
    res.write(`<p>expires in: ${req.session.cookie.maxAge / 1000} s</p>`);
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

app.use(history());
app.use(bodyParser.json());
app.use("/dist", express.static("dist"));

if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    })
  );
  app.use(webpackHotMiddleware(compiler));
}
app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, () =>
  console.log("Server listen on port =", port, "ENV =", process.env.NODE_ENV)
);
