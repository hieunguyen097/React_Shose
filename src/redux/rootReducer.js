import { combineReducers } from 'redux';
import { demoReducer } from './demoReducer';
import { gioHangReducer } from './gioHangReducer';

// export { rootReducer };
// ES6 object literal
export const rootReducer = combineReducers({
    demoReducer,
    gioHangReducer
    // userReducer
});

// export default rootReducer;
