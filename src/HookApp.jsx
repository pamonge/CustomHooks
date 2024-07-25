import React from 'react'
import { CounterApp } from './components/CounterComponent'
import { FormsApp } from './components/FormsComponent'
import { FetchApp } from './components/FetchComponent'
import CalculoPesadoApp from './components/CalculoPesadoComponent'
import { CallBackComponent } from './components/CallBackComponent'
import TaskListComponent from './components/TaskListComponent'

export const HookApp = () => {
  return (
    <>
      <h1>App de hooks</h1>
      <hr />
      <TaskListComponent />
    </>
  )
}
