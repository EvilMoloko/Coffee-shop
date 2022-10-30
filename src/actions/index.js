export const coffeeLoaded = (sortCoffee) => {
    return {
        type: "COFFEE_SORTED",
        payload: sortCoffee
    }
}

export const categoryFilterChanged = (filter) => {
    return {
        type: "CATEGORY_FILTER_CHANGED",
        payload: filter
    }
}

export const searchFieldChanged = (str) => {
    return {
        type: "SEARCH_FIELD_CHANGED",
        payload: str
    }
}

