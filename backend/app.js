const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const compression = require("compression");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const cookieparser = require("cookie-parser");

const pgRouter = require("./routes/pgRoutes");
const roomRouter = require("./routes/roomRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRoomRouter = require("./routes/reviewRoomRoutes");
// const bookingRouter = require("./routes/bookingRoutes");

const AppError = require("./utils/appError");
const GlobalErrorHandler = require("./controllers/errorController");
const VisitRequestRouter = require("./routes/visitRequestRoutes");

const app = express();

app.enable("trust proxy");

//! middlewares*******************

//! MIDDLEWARES ****************************
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// app.use(compression());
// limit request from same api
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP , please try again in an hour"
});

app.use("/api", limiter);

// body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieparser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent HTTP parameter pollution ,removes duplicate fields in query
app.use(
  hpp({
    whitelist: [
      "ratingsAverage",
      "maxGuests",
      "standard",
      "rent",
      "roomFor",
      "ratingsQuantity"
    ]
  })
);

app.use("/api/v1/pgs", pgRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/roomReviews", reviewRoomRouter);
app.use("/api/v1/visitRequest", VisitRequestRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(GlobalErrorHandler);
module.exports = app;
