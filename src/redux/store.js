import { legacy_createStore as createStore } from "redux"

const initialState = [
  { id: 1, name: 'Explicar reducers', finalizada: false }
]

const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[TAREAS] Agregar Tarea':
      return [ ...state, action.payLoad ]
    case '[TAREAS] Finalizar Tarea':
      return state.map(tarea => {
        if (tarea.id === action.payLoad) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada
          }
        } else {
          return tarea
        }
      })
    case '[TAREAS] Eliminar Tarea':
      return state.filter(tarea => tarea.id !== action.payLoad)
    case '[TAREAS] Borrar Tareas':
      return []
    default:
      break;
  }
  return state
}

export const store = createStore(taskReducer)