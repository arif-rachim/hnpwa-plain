/**
 * Created by gal2729 on 1/31/2018.
 */
import on from '../on.js';

export default ({id,title,points,user,time,time_ago,comments_count,type,url,domain},index) => {

    let element = {
        click : function (event){
            this.innerText = 'Hello'
        }
    };
    return `

<article class="${on}">
    <div class="column-one">
        <label class="index">${index}</label>
        <label class="upvote">▲</label>
    </div>
    <div class="column-two">
        <div class="title">${title} <span class="domain">(${domain})</span></div>
        <div class="comments">${points || 0} by ${user || 'anonymous'} ${time_ago} | <a href="#">hide</a> | ${comments_count} comments</div>    
    </div>
</article>
`}