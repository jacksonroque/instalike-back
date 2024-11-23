import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus:200

}

// Configura o middleware multer para definir o destino do upload de imagens (pasta uploads)
const upload = multer({ dest: "./uploads" });

// Função que define as rotas da API
const routes = (app) => {

  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());
  app.use(cors(corsOptions))


  // Rota GET para listar todos os posts (implementada na função listarPosts do arquivo postsController.js)
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post (implementada na função postarNovoPost do arquivo postsController.js)
  app.post("/posts", postarNovoPost);

  // Rota POST para upload de imagem (usa o middleware multer e chama a função uploadImagem do arquivo postsController.js)
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
};

  

export default routes;