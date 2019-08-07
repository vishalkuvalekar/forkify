import Search from './modules/Search';

/**
 * Global state of the app
 * - Search object
 * - current recipe object
 * - shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    //1. get query from view
    const query = 'pizza';

    if (query) {
        // 2. new search object and add it to state
        state.search = new Search(query);

        // 3. prepare UI for result


        // 4. Search for recipes
        await state.search.getResults();

        // 5. render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// const search = new Search('pasta');
// const result = search.getResults();


// https://www.food2fork.com/api/search
// https://www.food2fork.com/api/get 
// c4060d37255f9940913f65a8ed1cdba5

