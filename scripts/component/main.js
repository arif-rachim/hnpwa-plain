/**
 * Created by gal2729 on 1/31/2018.
 */

import on from '../on.js';
import component from './record.js';

function print(array){
    return array.map((data,index) => {
        return component(data,index+1)
    }).join('');
}

const fetchNews = (page=1) => {
    return fetch(`https://hnpwa.com/api/v0/news.json?page=${page}`).then(response => {
        return response.json();
    }).then(result =>{
        return print(result);
    });
};


export default () => {
    return `<main class="${on({
        create : function(){
            fetchNews(1).then((result)=>{
                this.innerHTML = result;
            })
        }
    })}"></main>`
}