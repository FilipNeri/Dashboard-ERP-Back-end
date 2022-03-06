import ItemVenda from "../models/ItemVenda";
import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(ItemVenda)
class ItemVendaRepository extends Repository<ItemVenda>{
    

}
export default ItemVendaRepository