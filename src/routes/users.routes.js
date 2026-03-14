import { Router } from "express";
import { pool } from '../db.js';
import { getusers,getUser,createUser,deleteUser,UpdateUser } from "../controllers/user.controllers.js";
const router = Router()

router.get('/users',getusers )

router.get('/users/:id',getUser)

router.post('/users', createUser);

router.delete("/users/:id",deleteUser);

router.put("/users/:id", UpdateUser);



export default(router)