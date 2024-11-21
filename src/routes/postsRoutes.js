import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const upload = multer({dest:"./uploads"})

const routes = (app) => {
    // Permite que o servidor interprete requisições com o corpo no
    app.use(express.json());
    // Rota GET para buscar todos os posts. Retorna um array de objetos com os posts no formato JSON.
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost )
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
