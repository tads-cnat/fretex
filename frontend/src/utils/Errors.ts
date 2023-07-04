export class Errors {
    static mapErrors(data:any) {
      const erros = Object.entries(data).map(([key, value]) => ({
        type: 'manual',
        name: key,
        message: `${value}`,
      }))
  
      return erros
    }
  }