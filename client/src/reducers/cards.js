import axios from 'axios'

const CARDS = 'CARDS';
const ADD_CARD = 'ADD_CARD';
const UPDATE_CARD = 'UPDATE_CARD';
const DELETE_CARD = 'DELETE_CARD';

export const getCards = () => {
  return (dispatch) => {
    axios.get('/api/cards')
      .then( res => dispatch({ type: CARDS, cards: res.data }) )
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    axios.post('/api/cards', { card } )
     .then( res => dispatch({ type: ADD_CARD, card: res.data }) )
  }
}

export const updateCard = (card) => {
  return (dispatch) => {
    axios.put(`/api/cards/${card.id}`, { card } )
      .then( res => dispatch({ type: UPDATE_CARD, card: res.data }) )
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    axios.delete(`/api/cards/${id}`)
      .then( () => dispatch({ type: DELETE_CARD, id }) )
  }
}

export default (state = [], action ) => {
  switch(action.type) {
    case CARDS:
      return action.cards
    case ADD_CARD:
      return [action.card, ...state]
    case UPDATE_CARD:
      return state.map( a => {
        if (a.id === action.card.id)
          return action.card
         return a
      })
    case DELETE_CARD:
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  } 
}