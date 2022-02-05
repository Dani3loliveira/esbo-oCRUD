const connection = require('../database/connection');

module.exports={
    async create(request,response){
        const{id} = request.body;

        const userprofile = await connection('a')
            .where('id', id)
            .select('name')
            .first();
            
        if(!userprofile){
            return response.status(400).json({error:'Não encontrado dados com esse ID' });
        }

        return response.json(userprofile);
    }

}