import { Request, Response } from 'express';


export class Controller {
    constructor() {
    }
  
    public async simulate(req: Request, res: Response): Promise<void> {    
      try {
          res.json({ message: "" });
      } catch (error) {
        res.status(500).json({ message: 'Erro ao processar a simulação' });
      }
    }
  }
  