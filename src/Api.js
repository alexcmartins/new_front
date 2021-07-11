import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
    //baseURL : 'https://api.hgbrasil.com/finance?key=fa3fa018'
    baseURL : 'https://api.hgbrasil.com/finance' 
});

export default api;
