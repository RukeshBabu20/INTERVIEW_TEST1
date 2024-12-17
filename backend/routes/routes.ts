import express from "express";
const router = express.Router();
import * as authController from "../controller/auth-controller";
import * as employeeController from "../controller/employee-controller";

router.get("/show", employeeController.showData);
router.get("/show/:id", employeeController.showIdData);
router.post("/create", employeeController.createData);
router.put("/update/:id", employeeController.updateData);
router.delete("/delete/:id", employeeController.deleteData);

router.post("/register", authController.createData);
router.get("/login", authController.showData);
router.post("/logout", authController.showData);

export default router;
