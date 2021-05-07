import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
    category: [],
    currentCategory: "全部",
    currentOrder: "hot",
    categorySongs: [],
    currentPanel: false,
    changePage: 1,
    trackIds: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return state.set("category", action.category);
        case actionTypes.CHANGE_CURRENT_CATEGORY:
            return state.set("currentCategory", action.currentCategory);
        case actionTypes.CHANGE_CATEGORY_SONGS:
            return state.set("categorySongs", action.categorySongs);
        case actionTypes.CHANGE_CURRENT_ORDER:
            return state.set("currentOrder", action.currentOrder);
        case actionTypes.CHANGE_CURRENT_PANEL:
            return state.set("currentPanel", action.currentPanel);
        case actionTypes.CHANGE_PAGE_NUM:
            return state.set("changePage", action.changePage);
        case actionTypes.CHANGE_SONGS_LIST:
            return state.set("trackIds", action.trackIds);
        default:
            return state;
    }
}

export default reducer;