import {Request, Response} from 'express'
import Empresa from '../models/empresa';

export const getEmpresas =  async (req: Request,res: Response) => {
    
    const empresas =await Empresa.findAll();
    
    res.json(empresas);
}

export const postEmpresa = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        
        const empresa = await Empresa.create(body);
        res.json(empresa);

    } catch (error) {
        if (error instanceof Error) {
          const message = error.message
          throw new Error(message)
        } else {
          const message = String(error)
          throw new Error(message)
        }
      }
    
}


