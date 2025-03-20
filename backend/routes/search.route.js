import express from "express";
import { searchHistory, removeHistory, searchTV, searchMovie, searchPerson} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTV);
router.get("/history", searchHistory);
router.delete("/history/:id", removeHistory);

export default router;
