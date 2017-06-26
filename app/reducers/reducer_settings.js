export default function reducer (
  state = {
    projectName: 'brandweer',
    zone: false,
    realtime: true,
    fetched: false
  }, action) {
  switch (action.type) {
    case 'FETCH_FILE':
    case 'FETCH_DATA_FULFILLED': {
      return {
        ...state,
        fetched: true
      }
    }
    case 'SET_ZONE' : {
      return {
        ...state,
        zone: action.payload
      }
    }
    default: {
      return state
    }
  }
}
