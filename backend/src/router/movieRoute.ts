import express from "express"
import { getAllMovies, createMovie, updateMovie, deleteMovie } from "../controller/movieController"
import { verifyAddMovie, verifyEditMovie } from "../middleware/movieValidation"
import { verifyRole, verifyToken } from "../middleware/authorization"
import uploadFile from "../middleware/movieUpload"

const app = express()
app.use(express.json())

app.get(`/`, [verifyToken, verifyRole(["CASHIER", "ADMIN"])], getAllMovies)
app.post(`/`, [ uploadFile.single("picture"), verifyAddMovie], createMovie)
app.put(`/:id`, [verifyToken, verifyRole(["ADMIN"]), uploadFile.single("picture"), verifyEditMovie], updateMovie)
app.delete(`/:id`, [verifyToken, verifyRole(["ADMIN"])], deleteMovie)

export default app