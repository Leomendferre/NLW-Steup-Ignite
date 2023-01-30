import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quart-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function NewHabitsForm() {
  return(
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semiboold leading-tight">
        Qual seu comprometimento?
      </label>

      <input 
      type="text" 
      id="title"
      placeholder="ex.: Exercícios, dormir bem, etc..."
      className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder; text-zinc-400"
      autoFocus
      />

      <label htmlFor="" className="font-semiboold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="mt-3 flex flex-col gap-2">
        {availableWeekDays.map(weekDay => {
          return( 
            <Checkbox.Root key={weekDay} className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="text-white leading-tight">
              {weekDay}
            </span>
          </Checkbox.Root>
          )
        })}
          
        </div>

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}