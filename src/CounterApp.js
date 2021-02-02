import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ** 정의한 actions를 이용해서 count를 payload에 담아 reducer에 전달한다.
import { add, substract } from './redux/actions/index';
import './style.css';

const CounterApp = (props) => {
  const { countState } = props;
  const { count } = countState;

  // redux를 사용하게 되면서 컴포넌트내에서 관리하는 state가 store에서 관리된다
  // const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <span className="display">
          {count}
        </span>
        <button className="btn" onClick={/* redux를 사용하지 않는다면 컴포넌트에서 정의한 add 함수를 입력한다 */ () => props.add(count)}>+</button>
        <button className="btn" onClick={/* redux를 사용하지 않는다면 컴포넌트에서 정의한 substract 함수를 입력한다 */ () => props.substract(count)}>-</button>
      </div>
    </>
   );
  //  function add() {
  //    setCount(count + 1);
  //  }

  //  function substract() {
  //   setCount(count - 1);
  //  }
}

const mapStateToProps = (state) => ({
  // ** store에서 combineReducers의 매개변수로 넘긴 countReducer의 결과물을 countState의 value로 넣는다.
  countState: state.countReducer
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    add,
    substract
  }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
