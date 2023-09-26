import IHouse from "../../models/houseInterface";

const setCity = (city: string) => {
    return {
        type: "SET_CITY",
        payload: city,
    }
}
const setHouses = (houses: Array<IHouse>) => {
    return {
        type: "SET_HOUSES",
        payload: houses,
    }
}

const setHousesTotalCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_COUNT",
        payload: totalCount,
    }
}

const setActivePage = (activePage: number) => {
    return {
        type: "SET_ACTIVE_PAGE",
        payload: activePage,
    }
}

const setPageLimit = (pageLimit: number) => {
    return {
        type: "SET_PAGE_LIMIT",
        payload: pageLimit,
    }
}

const setSelectedHouse = (selectedHouse: IHouse) => {
    return {
        type: "SET_SELECTED_HOUSE",
        payload: selectedHouse,
    }
}
const setSelectedHouseProperties = (selectedHouseProperties: any) => {
    return {
        type: "SET_SELECTED_HOUSE_PROPERTIES",
        payload: selectedHouseProperties,
    }
}

export default {
    setCity,
    setHouses,
    setHousesTotalCount,
    setActivePage,
    setPageLimit,
    setSelectedHouse,
    setSelectedHouseProperties,
};