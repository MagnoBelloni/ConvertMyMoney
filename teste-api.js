const axios = require('axios')

const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao'
axios.get(url).then(res => console.log(res))