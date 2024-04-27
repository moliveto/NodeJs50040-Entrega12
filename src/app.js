import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";

import usersRoutes from "./routes/user.routes.js";
import productsRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/carts.routes.js";
import { PORT, PERSISTENCE } from "./config/config.js";

const app = express();

const PORT_APP = PORT | 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", usersRoutes);
app.use("/api/products/", productsRoutes);
app.use("/api/carts/", cartRoutes);

app.listen(PORT_APP, () => {
    displayRoutes(app);
    console.log(`Listening on ${PORT_APP}, PERSISTENCE: ${PERSISTENCE}`);
});