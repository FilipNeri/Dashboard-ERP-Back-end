import { getCustomRepository } from "typeorm";

import Produto from "../models/Produto";
import ProdutosRepository from "../repositories/ProdutosRepository";

interface Request{
    nome:string;
    valor:number;
    estoque:number;
}
class CreateProdutoService{
    public async execute({nome,valor,estoque}:Request):Promise<Produto>{
        const produtosRepository = getCustomRepository(ProdutosRepository)

        const produto = produtosRepository.create({
            nome,valor,estoque
        })
        await produtosRepository.save(produto)
        return produto
    }
}
export default CreateProdutoService