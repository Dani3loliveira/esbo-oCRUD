const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection ('descricao').count();

        const incidents = await connection('descricao')
        .limit(1)
        .offset((page-1)*50)
        .select('*');

        /*
        .limit(1)
        .offset((page-1)*5)
        .select('*');

        Lembrete:
        Originalmente criado para mostrar vários registros ou observações na página,
        Para alterar a quantidade obviamente altere o limit, mas deve-se manter a fórmula
        (com algumas alterações) para utilizar desde o primeiro registro "0"

        obs: Dependendo do projeto não irei utilizar as descrições, porém é viável deixar pronto para possíveis usos.
         
        **/

        response.header('X-total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const{title, description} = request.body;
        const user_id = request.headers.authorization;

       const [id] = await connection('descricao').insert({
            title,
            description,
            user_id,
        });

        return response.json({id});
    },

    async delete(request, response){
        const{id} = request.params;
        const user_id = request.headers.authorization;

        const incidents = await connection('descricao')
            .where('id', id)
            .select('user_id')
            .first();

        if (incidents[user_id] != user_id){
            return response.status(401).json({error: 'Operação não permitida.'});
        }

        await connection ('descricao').where('id', id).delete();

        return response.status(204).send();
    }
};