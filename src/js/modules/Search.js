import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        const key = 'c4060d37255f9940913f65a8ed1cdba5';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(err) {
            console.log(err);
        }
    }

}