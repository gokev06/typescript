import express from "express"
import verytoken from "../controllers/verytoken-controllers";
import validateToken from "../Middleware/validateToken";

const router = express.Router();

router.get('/', validateToken, verytoken);

export default router;