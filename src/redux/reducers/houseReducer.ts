let initialState = {
    city: "",
    houses: [],
    totalCount: 0,
    limit: 3,
    activePage: 1,
    selectedHouse: {},
    selectedHouseProperties: [],
    houseImages: [],
    checkInDate: "",
    checkOutDate: "",
}

const houseReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_CITY":
            return {
                ...state,
                city: action.payload,
            }
        case "SET_HOUSES":
            return {
                ...state,
                houses: action.payload,
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.payload,
            }
        case "SET_ACTIVE_PAGE":
            return {
                ...state,
                activePage: action.payload,
            }
        case "SET_PAGE_LIMIT":
            return {
                ...state,
                limit: action.payload,
            }
        case "SET_SELECTED_HOUSE":
            return {
                ...state,
                selectedHouse: action.payload,
            }
        case "SET_SELECTED_HOUSE_PROPERTIES":
            return {
                ...state,
                selectedHouseProperties: action.payload,
            }
        case "SET_HOUSE_IMAGES":
            return {
                ...state,
                houseImages: action.payload,
            }
        case "SET_CHECK_IN_DATE":
            return {
                ...state,
                checkInDate: action.payload,
            }
        case "SET_CHECK_OUT_DATE":
            return {
                ...state,
                checkOutDate: action.payload,
            }
        default:
            return state;
    }
}

export default houseReducer;