import { FC } from "react";
import * as Styled from "./styles";

interface ButtonProps {
  variant?: "primary" | "secondary";
  title: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { title, variant = "primary" } = props;

  return (
    <Styled.Root>
      {({ pressed }) => (
        <Styled.Box pressed={pressed} variant={variant}>
          <Styled.Title>{title}</Styled.Title>
        </Styled.Box>
      )}
    </Styled.Root>
  );
};
