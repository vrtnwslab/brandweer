export default function reducer (
  state = {
    'be': {
      'center': [4.25, 51.0908704],
      'scale': 11000,
      'width': 663,
      'height': 260,
      'selectedAdmin': 4,
      'adminNames': [
        'Land',
        'Gewesten',
        'Provincies',
        'Kantons',
        'Gemeenten'
      ]
    }
  }, action) {
  switch (action.type) {
    case 'SET_ADMIN': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
