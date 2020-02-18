export const ADD_ITEM='ADD_ITEM'

export const REMOVE_ITEM='REMOVE_ITEM'

export function buyItem(item){
    console.log('item added here', item)
    return{
        type: ADD_ITEM,
        payload:item
    }
}


export function removeFeature(item){
    console.log('item is removed', item)
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}