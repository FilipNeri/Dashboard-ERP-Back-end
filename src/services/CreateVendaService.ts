import { getCustomRepository } from "typeorm";

import Venda from "../models/Venda";
import VendasRepository from "../repositories/VendasRepository";

interface Request{
    cliente:string;
    valor_total:number;
    created_at:Date;
}
class CreateVendaService{
    public async execute({cliente,valor_total,created_at}:Request):Promise<Venda>{
        const vendasRepository = getCustomRepository(VendasRepository)

        const venda = vendasRepository.create({
            cliente,valor_total,created_at
        })
        await vendasRepository.save(venda)
        return venda
    }
}
export default CreateVendaService