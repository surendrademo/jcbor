import express from 'express'
import { getUsers, setUser } from "../controllers/index.js";

const router = express.Router();

router.get('/', getUsers)
router.post('/', setUser)

export default router