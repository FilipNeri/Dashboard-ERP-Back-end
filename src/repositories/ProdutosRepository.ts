import Produto from "../models/Produto";
import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(Produto)
class ProdutosRepository extends Repository<Produto>{
    
}
export default ProdutosRepository