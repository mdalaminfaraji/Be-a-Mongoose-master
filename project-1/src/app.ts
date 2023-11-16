import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
const app = express();
// parsers
app.use(express.json());

// userRoute

const userRouter = express.Router();

app.use("/", userRouter);
userRouter.get("/api/v1/users/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user is created successfully",
    data: user,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname, req.query);
  next();
};
app.get("/", logger, (req: Request, res: Response, next:NextFunction) => {

  try {
        // console.log(something);
  } catch (error) {
        next(error);
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("back response");
});






app.all("*", (req:Request, res:Response)=>{
        res.status(400).json({
                success:false,
                message:"Route is not found"
        })
})
// global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if(error){
        res.status(400).json({
                success:false,
                message:"Something went wrong"
        })
  }
});

export default app;
