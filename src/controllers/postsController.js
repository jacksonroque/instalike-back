import  { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res){
    // Chama a função para buscar os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no
    res.status(200).json(posts);
}


export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisção"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisção"})
    }
}