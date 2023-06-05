import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "danger";
}

export function Button(props: ButtonProps) {
  return <ButtonContainer>Click me</ButtonContainer>;
}
