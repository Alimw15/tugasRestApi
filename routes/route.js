import express from "express"
import { createBuku, deleteBuku, getBuku, getBukuById, updateBuku } from "../controller/bukuController"

const router = express.Router()

router.get("/", getBuku)
router.get("/find", getBukuById)
router.post("/create", createBuku)
router.put("/update", updateBuku)
router.delete("/delete", deleteBuku)


export default router