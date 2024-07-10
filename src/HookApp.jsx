import React from 'react'
import { CounterApp } from './components/CounterApp'
import { FormsApp } from './components/FormsApp'
import { FetchApp } from './components/FetchApp'

export const HookApp = () => {
  return (
    <>
      <h1>App de hooks</h1>
      <hr />
      <FetchApp />
      <hr />
      <CounterApp />
      <hr />
      <FormsApp />
    </>
  )
}
