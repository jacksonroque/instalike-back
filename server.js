import express from "express";

const app = express();
app.use(express.json());
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato brincando com um novelo de lã", imagem: "https://placecats.com/millie/300/150", },
    { id: 2, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150", },
];



app.listen(3000, () => {
    console.log("servidor escutando...");
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
})