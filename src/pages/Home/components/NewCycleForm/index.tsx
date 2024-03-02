import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <>
      <FormContainer>
        <label htmlFor="">Vou trabalhar em </label>
        <TaskInput
          id="task"
          list="taskSuggestion"
          disabled={!!activeCycle}
          placeholder="Dê um nome para o seu projeto"
          {...register('task')}
        />
        <datalist id="taskSuggestion">
          <option value="Projeto 1"></option>
          <option value="Projeto 2"></option>
          <option value="Projeto 3"></option>
        </datalist>

        <label htmlFor="">Durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          disabled={!!activeCycle}
          placeholder="00"
          step={5}
          min={1}
          max={90}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </FormContainer>
    </>
  )
}