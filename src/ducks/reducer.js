const initialState = {
  name: "",
  address: "",
  city: "",
  st: "",
  zip: 0,
  image: "",
  mortgage: 0,
  rent: 0
};

const ADD_PROP = "ADD_PROP";
const ADD_IMAGE = "ADD_IMAGE";
const ADD_MORT_RENT = "ADD_MORT_RENT";
const CLEAR_FIELDS = "CLEAR_FIELDS";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROP:
      return {
        ...state,
        // name: action.payload.name,
        // address: action.payload.address,
        // city: action.payload.city,
        // st: action.payload.st,
        // zip: action.payload.zip
        ...action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case ADD_MORT_RENT:
      return {
        ...state,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      };
    case CLEAR_FIELDS:
      return {
        initialState
      };
    default:
      return state;
  }
}

export function addProp(name, address, city, st, zip) {
  return {
    type: ADD_PROP,
    payload: {
      name: name,
      address: address,
      city: city,
      st: st,
      zip: zip
    }
  };
}

export function addImage(image) {
  return {
    type: ADD_IMAGE,
    payload: image
  };
}

export function addMortRent(mortgage, rent) {
  return {
    type: ADD_MORT_RENT,
    payload: { mortgage, rent }
  };
}

export function clearFields() {
  return {
    type: CLEAR_FIELDS,
    payload: initialState
  };
}
export default reducer;
