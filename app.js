/*
 * Objetivo: Criar um API para realizar o CRUD do sistema de controle de filmes
 * Autor: Luiz
 * OBSERVAÇÃO:
 *      Para criar a API precisamos instalar:
 *          * express           npm install express --save
 *          * cors              npm install cors --save
 *          * body-parser       npm install body-parser --save
 *
 *      Para criar a integração com o Banco de Dados precisamos instalar:
 *          * prisma            npm install prisma --save           (para fazer conexão com o BD)
 *          * prisma/client     npm install @prisma/client --save   (para rodar os scripts SQL)
 * 
 *          Após a instalação do prisma e do prisma client, devemos:
 *              npx prisma init
 *          voce devera confidurar o arquivo .env e o schema.prisma com as credenciais do BD
 *          apos esa configuração devera rodar o seguinte comando:
 *              npx prisma migrate dev
 *          
*/

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

const bodyParserJSON = bodyParser.json()

const controllerFilme = require('./controller/filme/filme.js')

const app = express ()

app.use((request, response, next) =>{

    response.header('Access-Control-Allow-Origin', '*')
    
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') 

    app.use(cors())

    next()
})

app.post('/v1/controle-filme/filme', cors(), bodyParserJSON, async function(request, response){
    let dadosBody = request.body
    let resultFilme = await controllerFilme.inserirFilme(dadosBody)

    response.status(resultFilme.status_code)

    response.json(resultFilme)
})

app.listen('8080', function(){
    console.log('API funcionando...')
})