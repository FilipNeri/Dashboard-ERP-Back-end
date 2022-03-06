import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'


import ProdutosRepository from "../repositories/ProdutosRepository";
import CreateProdutoService from "../services/CreateProdutoService"


const produtosRouter = Router();



produtosRouter.post('/', async (request, response) => {
    const { nome,valor,estoque } = request.body
    

    const createProduto = new CreateProdutoService()
    await createProduto.execute({ nome,valor,estoque })
    return response.send({msg:"Produto criado com sucesso!!"})
})
produtosRouter.put('/', async (request, response) => {
    const { id, nome,valor,estoque } = request.body

    const produtosRepository = getCustomRepository(ProdutosRepository)
    await produtosRepository.update(id, { nome,valor,estoque })
    return response.send({msg:"Produto editado com sucesso!!"})
})
produtosRouter.delete('/:id', async (request, response) => {
    const { id } = request.params

    const produtosRepository = getCustomRepository(ProdutosRepository)
    await produtosRepository.delete(id)
   return response.send({msg:"Produto excluído com sucesso!!"})
})
produtosRouter.get('/', async (request, response) => {
    const produtosRepository = getCustomRepository(ProdutosRepository)
    const produtos = await produtosRepository.find()
   return response.json(produtos)
})
export default produtosRouter