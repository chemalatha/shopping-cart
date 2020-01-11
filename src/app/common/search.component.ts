import {Component} from '@angular/core';

@Component({
    selector:'search-icon',
    template:`<a class="fa fa-search"></a>`,
    styles:[
        `
        .count-class{
            border-radius:50%;
            border:1px solid white;
            height:15px;
        }
        a{
            line-height: 40px;
            font-size:19px;
        }
        `
    ]
})
export class SearchComponent{

}