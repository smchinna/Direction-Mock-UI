import * as actionTypes from '../actionTypes';

let initialState = {
  routes: [],
  listOfDestination: {},
  waitForDest: false,
  calledAPI: false
}

const makeDirection = (stops, directObj) => {
  let obj = {
    ...directObj,
    stop: []
  }
  if(directObj.stop) {
    directObj.stop.forEach((ele) => {
      let stopIndex = stops.findIndex((a) => a.tag === ele.tag);
      if(stopIndex > -1) {
        obj.stop.push(stops[stopIndex])
      }
    })
  }
  return obj;
}

const reducer = (state=initialState, action) => {
  
  switch(action.type) {

    case actionTypes.SAVE_ROUTES:
      let dupData = [];
      if(action.data) {
        action.data.forEach(ele => {
          let obj = {
            label: ele.title,
            value: ele.tag,
            id: ele.tag,
          }
          dupData.push(obj)
        });
      }
      return {
        ...state,
        routes: dupData
      }

    case actionTypes.SAVE_DIRECTIONS: 
      let dupDirectionData = {}
      if(action.data) {
        let { data } = action;
        dupDirectionData = {...data }
        if(data.direction && data.stop) {
          dupDirectionData.stops = data.stop;
          let arr = [];
          let optionArr = []
          data.direction.forEach((obj, index) => {
            optionArr.push({ value: index, label: obj.title});
            arr.push(makeDirection(data.stop, obj));
          })
          dupDirectionData.directions = arr;
          dupDirectionData.options = optionArr
        } else {
          dupDirectionData.directions = [];
          dupDirectionData.stops = [];
          dupDirectionData.options = []
        }
      }
      return {
        ...state,
        listOfDestination: dupDirectionData,
        waitForDest: false
      }

      case actionTypes.WAIT_LOADER:
        return {
          ...state,
          waitForDest: true,
          calledAPI: true
        }

    default:
      return {...state}
  }
}

export default reducer;