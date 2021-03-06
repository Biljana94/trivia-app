//importovali smo servis odakle cemo da pozivamo metode koje nam trebaju
import { chuckService } from '../services/ChuckService.js';


//exportovali smo store i naveli smo state{}
export const chuckStore = {
    state: {
        joke: '',
        categories: [],
    },

    actions: {
        //asinhrona akcija
        //pozivamo metodu iz servisa i pisemo promise
        async joke({ commit }, categ) {
            // console.log('bdjb')
            try {
                const response = await chuckService.getRandomJoke(categ);
                commit('SET_JOKE', response.value); //u commitu pisemo mutaciju i response
            } catch(error) {
                console.log(error);
            }
        },


        async jokesCategories({ commit }) {
            try {
                const response = await chuckService.getJokeCategories();
                commit('SET_JOKES_CATEGORIES', response);
            } catch(error) {
                console.log(error);
            }
        }
    },

    mutations: {
        //preko mutacije menjamo akciju
        SET_JOKE(state, joke) {
            state.joke = joke;
        },

        SET_JOKES_CATEGORIES(state, category) {
            state.categories = category;
        }
    },

    getters: {
        randomJoke: state => state.joke,
        getCategories: state => state.categories,

    },
};
