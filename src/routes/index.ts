import { Router } from "express";
import produtosRouter from "./produtos.routes";
import vendasRouter from "./vendas.routes";
import itemVendasRouter from "./itemVendas.routes";



const routes = Router();


routes.use('/produtos',produtosRouter)
routes.use('/vendas',vendasRouter)
routes.use('/itemVendas',itemVendasRouter)


export default routes;