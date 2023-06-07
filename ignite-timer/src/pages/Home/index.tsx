import { createContext, useEffect, useState } from "react";

import { HandPalm, Play } from "phosphor-react";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
//

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContextData {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
}

export const CyclesContext = createContext({} as CycleContextData);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  // Encontra o ciclo ativo
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  // Verificar se task está preenchido ou não (watch é uma função do react-hook-form)
  // const task = watch("task");
  // Define se o botão de submit está habilitado ou não baseado no valor de task (se está preenchido ou não)
  // const isSubmitDisabled = !task;

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          };
        }
        return cycle;
      })
    );
  }

  // // Função que é chamada quando o formulário é submetido
  // function handleCreateNewCycle(data: NewCycleFormData) {
  //   const id = String(new Date().getTime());
  //   const newCycle: Cycle = {
  //     id,
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //   };

  //   setCycles((oldCycles) => [...oldCycles, newCycle]);
  //   setActiveCycleId(id);
  //   setAmountSecondsPassed(0);
  //   reset();
  // }

  // Função para interromper o ciclo
  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          };
        }
        return cycle;
      })
    );
    setActiveCycleId(null);
  }

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)}*/>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
          {activeCycle ? (
            <StopCountdownButton onClick={handleInterruptCycle} type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton
              /*disabled={isSubmitDisabled} */ type="submit"
            >
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </CyclesContext.Provider>
      </form>
    </HomeContainer>
  );
}
