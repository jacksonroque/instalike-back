import express from "express";
import { listarPosts } from "../controllers/postsController.js";


const routes = (app) => {
    // Permite que o servidor interprete requisições com o corpo no
    app.use(express.json());
    // Rota GET para buscar todos os posts. Retorna um array de objetos com os posts no formato JSON.
    app.get("/posts", listarPosts);
}

export default routes;
