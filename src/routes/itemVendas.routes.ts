import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'


import ItemVendasRepository from "../repositories/ItemVendasRepository";
import CreateItemVendaService from "../services/CreateItemVendaService"


const itemVendasRouter = Router();

itemVendasRouter.post('/', async (request, response) => {
    const {cliente,produto,quantidade,valor_unitario,valor_total,created_at} = request.body
    const createItemVenda = new CreateItemVendaService()
    await createItemVenda.execute({cliente,produto,quantidade,valor_unitario,valor_total,created_at})
    return response.send({msg:"Venda criada com sucesso!!"})
})
itemVendasRouter.put('/', async (request, response) => {
    const { id,cliente,produto,quantidade,valor_unitario,valor_total} = request.body

    const itemVendasRepository = getCustomRepository(ItemVendasRepository)
   await itemVendasRepository.update(id, {cliente,produto,quantidade,valor_unitario,valor_total})
    return response.send({msg:"Venda editada com sucesso!!"})
})
itemVendasRouter.delete('/:id', async (request, response) => {
    const { id } = request.params

    const itemVendasRepository = getCustomRepository(ItemVendasRepository)
   await itemVendasRepository.delete(id)
    return response.send({msg:"Venda removida com sucesso!!"})
})
itemVendasRouter.get('/', async (request, response) => {
    const itemVendasRepository = getCustomRepository(ItemVendasRepository)
    const itemVendas = await itemVendasRepository.find()
    return response.json(itemVendas)
})

export default itemVendasRouter