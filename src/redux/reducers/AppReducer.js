import { APP_DETAILS } from "../../defs/appDetails"

const initialState = {
    pageTitle: APP_DETAILS.name,
    description: APP_DETAILS.desciption
}

export default function AppReducer (state = initialState, { type, payload }) {
    switch (type) {
        
        case "UPDATE_PAGE_TITLE": return {...state, pageTitle : payload };
        case "UPDATE_PAGE_DESCRIPTION": return {...state, description : payload };
        case "UPDATE_APP_DETAILS": return {...state, ...payload};
        
    default:
        return state
    }
}
