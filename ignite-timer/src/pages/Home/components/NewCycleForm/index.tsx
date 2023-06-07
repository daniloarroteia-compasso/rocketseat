import { useForm } from "react-hook-form";
import * as zod from "zod";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, { message: "Informe a tarefa" })
    .nonempty({ message: "Campo obrigatório" }),
  minutesAmount: zod.number().min(1).max(60),
});

// tipagem do zod para o react-hook-form (inferir o tipo de um objeto)
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
  const { reset, register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
        <option value="Projeto 1" />
      </datalist>
      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
