import { ADD_VEG, REMOVE_VEG ,ADDQUANTITY,SUBQUANTITY} from "./actionTypes"

const initialState = {

    plant: [
        {
            agwaDevice: {

                "id": "",
                "name": "",
                "img": ""
            },
            quantity: 1
        }

    ],
    addedItems: [

    ]
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_VEG: {

            let addedItem = state.items.find(item => item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,

                }
            } else {
                addedItem.quantity = 1;
                //calculating the total

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],

                }

            }
        }
        case REMOVE_VEG:{
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            
            
            return{
                ...state,
                addedItems: new_items,
             
            }
        }

        case ADDQUANTITY:{
            let addedItem = state.items.find(item=> item.id === action.id)
            addedItem.quantity += 1 
         
            return{
                ...state,
                
            }
        }

        case SUBQUANTITY:{
            let addedItem = state.items.find(item=> item.id === action.id) 
            //if the qt == 0 then it should be removed
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
                
                return{
                    ...state,
                    addedItems: new_items,
                    
                }
            }
            else {
                addedItem.quantity -= 1
                
                return{
                    ...state,
                    
                }
            }
        }
      
        default: return state
    }
  
}


export default reducer