import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'


import VendasRepository from "../repositories/VendasRepository";
import CreateVendaService from "../services/CreateVendaService"


const vendasRouter = Router();

vendasRouter.post('/', async (request, response) => {
    const { cliente,valor_total,created_at } = request.body

    const createVenda = new CreateVendaService()
    await createVenda.execute({ cliente,valor_total,created_at })
    return response.send({msg:"Venda criada com sucesso!!"})
})
vendasRouter.put('/', async (request, response) => {
    const { id, cliente,valor_total,created_at } = request.body

    const vendasRepository = getCustomRepository(VendasRepository)
   await vendasRepository.update(id, { cliente,valor_total,created_at })
    return response.send({msg:"Venda editada com sucesso!!"})
})
vendasRouter.delete('/:id', async (request, response) => {
    const { id } = request.params

    const vendasRepository = getCustomRepository(VendasRepository)
   await vendasRepository.delete(id)
    return response.send({msg:"Venda removida com sucesso!!"})
})
vendasRouter.get('/', async (request, response) => {
    const vendasRepository = getCustomRepository(VendasRepository)
    const vendas = await vendasRepository.find()
    return response.json(vendas)
})

export default vendasRouter