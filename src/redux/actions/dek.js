// export const getDataCat = (data) => {
//     console.log('action --> saveChangePasswordUser ')
//     return async (dispatch) => {
//         try {
//             // const results = await Service.getImageItems(data)
//             // console.log(results)
//             alert('SUCCESS')
//             dispatch({ type: 'SUCCESS', payload: results })
//             console.log(results)
//         } catch (error) {
//             alert('FAILED')
//             dispatch({ type: 'FAILED', payload: '' })
//             console.log(error)
//         }
//     }
// }

export const unSelectedDek = (data) => {
    return async (dispatch) => {
        console.log(data)
        dispatch({ type: 'UNSELECTED_DEK', payload: data })
    }
}

export const selectedDek = (data) => {

    return async (dispatch) => {
        console.log('selectedDek=>',data)           
        dispatch({ type: 'SELECTED_DEK', payload: data })
    }
}

export const removeSelected = (data) => {
    return async (dispatch) => {
        dispatch({ type: 'REMOVE_DEK', payload: data })
    }
}