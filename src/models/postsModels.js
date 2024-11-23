import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para buscar todos os posts da coleção "posts" no banco de dados "imensao-instabytes"
export async function getTodosPosts(){
    const db =  conexao.db ("imensao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    
    const db =  conexao.db ("imensao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
    
    const db =  conexao.db ("imensao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}
