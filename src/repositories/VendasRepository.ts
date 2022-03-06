import Venda from "../models/Venda";
import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(Venda)
class ProdutosRepository extends Repository<Venda>{
    

}
export default ProdutosRepository