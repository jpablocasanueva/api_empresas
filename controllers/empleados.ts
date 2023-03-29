import {Request, Response} from 'express'
import Empleado from '../models/empleado'


export const getEmpleados = async (req: Request,res: Response) => {
    
    const empleados = await Empleado.findAll();
    
    res.json(empleados);
}

export const getEmpleadosByEmpresa = async (req: Request, res: Response) => {
    
    const { id } = req.params
    const empleados = await Empleado.findAll({
        where: {
            rut_empresa: id
        }
    })

    res.json(empleados);
    
    
}

export const postEmmpleado = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        
        const empleado = await Empleado.create(body);
        res.json(empleado);

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



