import {createStore} from 'redux'
const state = {data: '空'}

function reducer (initState=state, action) {
  switch (action.type) {
    case 'CH':
      return {...initState, data: action.payload};
    default:
      return {...initState}
  }
}

export function createClientStore () {
  // return createStore(reducer, window.REDUX_DATA)
  return createStore(reducer)
}
export function createServerStore () {
  return createStore(reducer)
}