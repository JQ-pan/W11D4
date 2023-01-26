import { assertThrowStatement } from '@babel/types';
import produceData from '../mockData/produce.json'

const POPULATE = "produce/POPULATE"

export function populateProduce() {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(element => {
                newState[element.id] = element;
            });
            return newState;
        default: 
            return state;
    }
}
