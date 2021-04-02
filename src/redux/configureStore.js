import { createStore,combineReducers,applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from'./dishes';
import { Comments } from'./comments';
import { Promotions } from'./promotions';
import { Leaders } from'./leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from './Forms';
//form dont need reducers creators
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initialFeedback
            }),
        }),
        applyMiddleware(thunk,logger)
    );
    
    return store;
}