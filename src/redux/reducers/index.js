import { combineReducers } from 'redux';
import countReducer from './countReducer';

// ** 여러 reducer를 넣기 위해서는 combineReducers를 사용하면 된다
// ** 이때 지정한 변수명은 mapStateToProps에서 사용한다
export default combineReducers({ countReducer });
