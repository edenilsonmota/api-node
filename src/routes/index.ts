import { Router } from "express";
//import { cityRouter } from "./city.routes";
//import { peopleRouter } from "./people.routes";

const router = Router();

//agrupa as rotas

//router.use("/people", peopleRouter);  //private - (get, post, put, delete)
//router.use("/city", cityRouter); //private - (get, post, put, delete)
//router.use("/login", loginRouter); //public - (post)
//router.use("/register", registerRouter); //public - (post)

// Example route for people
router.use("/city", (req, res) => {
  res.send("City route is not implemented yet.");
});


//exportando rotas
export { router };