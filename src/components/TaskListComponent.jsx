import React, { useReducer } from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'

const TaskListComponent = () => {

  const tareas = useSelector(state => state)
  const dispatch = useDispatch()

  const addNewTask = (event) => {
    event.preventDefault()
    if (tarea == '') return
    const nuevaTarea = {
      id: new Date().getTime(),
      name: tarea,
      finalizada: false
    }
    const action = {
      type: '[TAREAS] Agregar Tarea',
      payLoad: nuevaTarea, 
    }
    dispatch(action)
  }

  const endTask = (id) => {
    const action = {
      type: '[TAREAS] Finalizar Tarea',
      payLoad: id
    }
    dispatch(action)
  }

  const deleteTask = (id) => {
    const action = {
      type: '[TAREAS] Eliminar Tarea',
      payLoad: id 
    }
    dispatch(action)
  }

  const deleteAll = () => {
    const action = {
      type: '[TAREAS] Borrar Tareas',
    }
    dispatch(action)
  }

  const { tarea, onInputChange } = useForm({ tarea: '' })

  return (
    <>
      <form onSubmit={addNewTask} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Agregar tarea</label>
          <input 
            type="text" 
            className="form-control" 
            id="tarea" 
            name='tarea'
            value={tarea}
            onChange={onInputChange}/>
        </div>
      
        <button type="submit" className="btn btn-primary m-3">Agregar</button>
        <button type="button" className="btn btn-danger m-3" onClick={ deleteAll } >Eliminar todas</button>
      </form>

      <hr />
      <ul className='list-group'>
        {tareas.map(tarea => {
          return (<li className='list-group-item d-flex justify-content-between align-items-center' key={tarea.id}>
            <span>{tarea.name}</span>
            <input 
              type='checkbox' 
              value={tarea.finalizada}
              onChange={() => endTask(tarea.id)}/>
              <button type="button" className="btn btn-danger" onClick={() => deleteTask(tarea.id)} >Eliminar</button>
          </li>)
        })}
      </ul>
    </>
  )
}

export default TaskListComponent