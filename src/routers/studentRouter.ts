import { Router } from "express";
import {
	getStudentByCpf,
	postStudent,
	updateStudentInfo,
} from "../controllers/studentControllers.js";
import {
	checkIfEnrolledStudent,
	checkIfNewStudent,
	validateCpf,
	validateStudent,
	validateUpdate,
} from "../middlewares/studentMiddlewares.js";

export const studentRouter = Router();

studentRouter.get(
	"/student/",
	validateCpf,
	checkIfEnrolledStudent,
	getStudentByCpf
);
studentRouter.post("/student", validateStudent, checkIfNewStudent, postStudent);
studentRouter.put(
	"/student/:cpf",
	validateCpf,
	validateUpdate,
	checkIfEnrolledStudent,
	updateStudentInfo
);
studentRouter.delete("/student/:cpf");
