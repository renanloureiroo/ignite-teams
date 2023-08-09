import {
  FC,
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TextInput, TextInputProps } from "react-native";

import * as Styled from "./styles";

interface InputProps extends TextInputProps {
  status?: "default" | "error" | "focused";
}

const BaseInput: ForwardRefRenderFunction<TextInput, InputProps> = (
  props,
  ref
) => {
  const { status = "default", autoFocus, ...rest } = props;
  const inputRef = useRef<TextInput>(null);

  const [focused, setFocused] = useState(false);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        focusInput();
      }, 100);
    }
  }, [autoFocus]);

  const isFocused = focused || status === "focused";
  const finalStatus =
    status === "error" ? "error" : isFocused ? "focused" : "default";

  useImperativeHandle(ref, () => inputRef.current!);

  return (
    <Styled.Root status={finalStatus} onPress={focusInput}>
      <Styled.Field
        ref={inputRef}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
    </Styled.Root>
  );
};

export const Input = forwardRef(BaseInput);
