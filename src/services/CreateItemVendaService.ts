import { getCustomRepository } from "typeorm";

import ItemVenda from "../models/ItemVenda";
import ItemVendasRepository from "../repositories/ItemVendasRepository";

interface Request{
    cliente:string;
    produto:string;
    quantidade:number;
    valor_unitario:number;
    valor_total:number;
    created_at:Date;
}
class CreateVendaService{
    public async execute({cliente,produto,quantidade,valor_unitario,valor_total,created_at}:Request):Promise<ItemVenda>{
        const itemVendasRepository = getCustomRepository(ItemVendasRepository)

        const itemVenda = itemVendasRepository.create({
            cliente,produto,quantidade,valor_unitario,valor_total,created_at
        })
        await itemVendasRepository.save(itemVenda)
        return itemVenda
    }
}
export default CreateVendaService