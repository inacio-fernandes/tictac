import React, { useState } from "react";
import axios from 'axios';

export default function Listagem () {

    const [cnpj, setCnpj] = useState({cnpj: ''});
    const [informacoes, setInformacoes] = useState({

        cnpj: '',
        identificador_matriz_filial: '',
        descricao_matriz_filial: '',
        razao_social: '',
        nome_fantasia: '',
        situacao_cadastral: '',
        descricao_situacao_cadastral: '',
        data_situacao_cadastral: '',
        motivo_situacao_cadastral: '',
        nome_cidade_exterior: '',
        codigo_natureza_juridica: '',
        data_inicio_atividade: '',
        cnae_fiscal: '',
        cnae_fiscal_descricao: '',
        descricao_tipo_logradouro: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        uf: '',
        codigo_municipio: '',
        municipio: '',
        ddd_telefone_1: '',
        ddd_telefone_2: '',
        ddd_fax: '',
        qualificacao_do_responsavel: '',
        capital_social: '',
        porte: '',
        descricao_porte: '',
        opcao_pelo_simples: '',
        data_opcao_pelo_simples: '',
        data_exclusao_do_simples: '',
        opcao_pelo_mei: '',
        situacao_especial: '',
        data_situacao_especial: '',
        cnaes_secundarios: '', 
        qsa:''

    });

    //buscar as informacoes
    const getInformacoes = () => {
        console.log("registrando")
        axios.get('https://brasilapi.com.br/api/cnpj/v1/' + cnpj )
            .then( response => {
                setInformacoes(response.data);
            });
    }
    //Atualizar o Cnpj
    const handlingCnpj = (e) => {
        setCnpj(e.target.value);
    }

    return (
        <>
            <h1>Consultando CEP</h1>
            <div>
                <input 
                    type="text" 
                    onChange={ (e) => { handlingCnpj(e) }} 
                    placeholder="Digite o CNPJ"
                />
                <button onClick={ getInformacoes }>Pesquisar</button>
            </div>
            <div>
                <ul>

                    <li>cnpj:  { informacoes['cnpj']}</li>
                    <li>identificador_matriz_filial: { informacoes['identificador_matriz_filial']}</li>
                    <li>descricao_matriz_filial: { informacoes['descricao_matriz_filial']}</li>
                    <li>razao_social: { informacoes['razao_social']}</li>
                    <li>nome_fantasia: { informacoes['nome_fantasia']}</li>
                    <li>situacao_cadastral: { informacoes['situacao_cadastral']}</li>
                    <li>descricao_situacao_cadastral:{ informacoes['descricao_situacao_cadastral']}</li>
                    <li>data_situacao_cadastral: { informacoes['data_situacao_cadastral']}</li>
                    <li>motivo_situacao_cadastral: { informacoes['motivo_situacao_cadastral']}</li>
                    <li>nome_cidade_exterior: { informacoes['nome_cidade_exterior']}</li>
                    <li>codigo_natureza_juridica: { informacoes['codigo_natureza_juridica']}</li>
                    <li>data_inicio_atividade: { informacoes['data_inicio_atividade']}</li>
                    <li>cnae_fiscal: { informacoes['cnae_fiscal']}</li>
                    <li>cnae_fiscal_descricao: { informacoes['cnae_fiscal_descricao']}</li>
                    <li>descricao_tipo_logradouro: { informacoes['descricao_tipo_logradouro']}</li>
                    <li>logradouro: { informacoes['logradouro']}</li>
                    <li>numero: { informacoes['numero']}</li>
                    <li>complemento: { informacoes['complemento']}</li>
                    <li>bairro: { informacoes['bairro']}</li>
                    <li>cep: { informacoes['cep']}</li>
                    <li>uf: { informacoes['uf']}</li>
                    <li>codigo_municipio: { informacoes['codigo_municipio']}</li>
                    <li>municipio: { informacoes['municipio']}</li>
                    <li>ddd_telefone_1: { informacoes['ddd_telefone_1']}</li>
                    <li>ddd_telefone_2: { informacoes['ddd_telefone_2']}</li>
                    <li>ddd_fax: { informacoes['ddd_fax']}</li>
                    <li>qualificacao_do_responsavel: { informacoes['qualificacao_do_responsavel']}</li>
                    <li>capital_social: { informacoes['capital_social']}</li>
                    <li>porte: { informacoes['porte']}</li>
                    <li>descricao_porte: { informacoes['descricao_porte']}</li>
                    <li>opcao_pelo_simples: { informacoes['opcao_pelo_simples']}</li>
                    <li>data_opcao_pelo_simples: { informacoes['data_opcao_pelo_simples']}</li>
                    <li>data_exclusao_do_simples: { informacoes['data_exclusao_do_simples']}</li>
                    <li>opcao_pelo_mei: { informacoes['opcao_pelo_mei']}</li>
                    <li>situacao_especial: { informacoes['situacao_especial']}</li>
                    <li>data_situacao_especial: { informacoes['data_situacao_especial']}</li>


                </ul>
            </div>
        </>
    );
}