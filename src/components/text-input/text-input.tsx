import { useId } from "react";
import { joinClasses } from "../../logic/join-classes.js";
import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import "./text-input.scss";

interface CommonTextInputProps {
  label?: string | undefined;
  error?: string | undefined;
  hint?: string | undefined;
}

type TextInputProps =
  | (CommonTextInputProps &
      InputHTMLAttributes<HTMLInputElement> & {
        multiline?: false | undefined;
      })
  | (CommonTextInputProps &
      TextareaHTMLAttributes<HTMLTextAreaElement> & {
        multiline: true;
      });

export const TextInput: FC<TextInputProps> = (props) => {
  const generatedId = useId();

  const { label, error, hint, id, className } = props;

  const inputId = id || generatedId;
  const baseClass = "pixel-input";

  const wrapperClass = joinClasses(`${baseClass}-wrapper`, error && `${baseClass}-wrapper--error`, className);

  const textInput = createTextInput({ ...props, id: inputId });

  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={inputId} className={`${baseClass}__label`}>
          {label}
        </label>
      )}

      <div className={`${baseClass}__container`}>
        {textInput}
      </div>

      {error && <p className={`${baseClass}__error-message`}>⚠ {error}</p>}

      {!error && hint && (
        <p className={`${baseClass}__hint-message`}>{hint}</p>
      )}
    </div>
  );
};

function createTextInput (props: TextInputProps) {
  const baseClass = "pixel-input";

  if (props.multiline) {
    const { multiline, label, hint, error, ...textareaProps } = props;

    return (
      <textarea
        {...textareaProps}
        className={`${baseClass}__field`}
        aria-invalid={!!error}
      />
    );
  }

  const { multiline, label, hint, error, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      className={`${baseClass}__field`}
      aria-invalid={!!error}
    />
  );
}