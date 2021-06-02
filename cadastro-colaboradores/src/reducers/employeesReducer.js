import ADD_EMPLOYEE from '../actions/index';

const INITIAL_STATE = {
  employees: [],  
}

export default function employeesReducer(state= INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
      }
    default:
      return state;  
  }
}