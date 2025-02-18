/***********************************************************************************
 * Objetivo: Arquivo de configuração para padronizar mensagens e status code da API
 * Data: 18/02/2025
 * Autor: Luiz 
 * Versão 1.0
************************************************************************************/

/*Status code de mensagens de erro*/
const ERROR_REQUIRED_FIELDS = {status: false, status_code: 400, message: 'Não foi possivel realizar a requisisção, pois existem '}

const ERROR_INTERNAL_SERVER = {status: false, status_code: 500, message: 'devido a erros internos do servidor nao foi possivel processar a requisição'}

/**************STATUS CODE DE MNSGS DE SUCESSO******************/
const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'item criado com sucesso!'}
module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM
}