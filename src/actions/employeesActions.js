import ADD_EMPLOYEE from './index';

export default function registerEmployee(name, password, email) {
  return {
    type: ADD_EMPLOYEE,
    payload: {
      name,
      password,
      email,
    }
  }
}