"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
// userRoute
const userRouter = express_1.default.Router();
app.use("/", userRouter);
userRouter.get("/api/v1/users/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user is created successfully",
        data: user,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname, req.query);
    next();
};
app.get("/", logger, (req, res, next) => {
    try {
        // console.log(something);
    }
    catch (error) {
        next(error);
    }
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("back response");
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
exports.default = app;
