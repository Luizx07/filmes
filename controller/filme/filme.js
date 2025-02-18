/************************************************************************************
 * Objetivo: Controller responsável pela regra de negócio referente ao CRUD de Filme
 * Data: 11/02/2025
 * Autor: Luiz
 * Versão: 1.0
************************************************************************************/

//Funcão para tratar a inserção de um novo filme no DAO
const message = require('../../modulo/config.js')

const filmeDAO = require('../../model/DAO/filme.js')

const inserirFilme = async function (){
    let response = {}

    if(filme.nome                  == '' || filme.nome             == undefined || filme.nome             == null || filme.nome.length             > 80 || 
        filme.nome                 == '' || filme.nome             == undefined || filme.nome             == null || filme.duracao.length          > 5  || 
        filme.sinopse              == '' || filme.sinopse          == undefined || filme.sinopse          == null ||
        filme.data_lancamento      == '' || filme.data_lancamento  == undefined || filme.data_lancamento  == null || filme.data_lancamento.length  > 10 ||
        filme.foto_capa.length     > 200 || filme.foto_capa        == undefined ||
        filme.link_trailer.length  > 200 || filme.link_trailer     == undefined
    ){
        return message.ERROR_REQUIRED_FIELDS //400
    }else{
        let resultFilme = await filmeDAO.insertFilme(filme)

        if(resultFilme)
            return message.SUCCESS_CREATED_ITEM //201
        else
        return message.ERROR_INTERNAL_SERVER //500
    }
}
//Funcão para tratar a atualização de um novo filme no DAO
const atualizarFilme = async function (){
    
}

//Funcão para tratar a excluir de um novo filme no DAO
const excluirFilme = async function (){
    
}

//Funcão para tratar o retorno de filmes do DAO
const listarFilme = async function (){
    
}

//Funcão para tratar o retorno de um filme filtrando pelo id do DAO
const buscarFilme = async function (){
    
}
module.exports = {
    inserirFilme,
    atualizarFilme,
    excluirFilme,
    listarFilme,
    buscarFilme
}