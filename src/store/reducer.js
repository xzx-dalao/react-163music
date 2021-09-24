import {combineReducers} from 'redux-immutable'
import { withReduxStateSync } from 'redux-state-sync';
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
import {reducer as playReducer} from '../pages/player/store'
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
import { reducer as songsReducer } from "../pages/discover/c-pages/songs/store";
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";
import { reducer as searchReducer } from "../pages/search/store";

const cReducer = combineReducers({
    recommend:recommendReducer,
    player:playReducer,
    ranking:rankingReducer,
    songs: songsReducer,
    album:albumReducer,
    search:searchReducer,
    artist:artistReducer
});
export default withReduxStateSync(cReducer);