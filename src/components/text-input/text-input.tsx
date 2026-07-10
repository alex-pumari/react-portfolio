import { useId } from "react";
import { joinClasses } from "../../logic/join-classes.js";
import type { FC, InputHTMLAttributes } from "react";
import "./text-input.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
  error?: string | undefined;
  hint?: string | undefined;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  error,
  hint,
  id,
  className,
  disabled,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const baseClass = "pixel-input";

  return (
    <div className={joinClasses(`${baseClass}-wrapper`, error && `${baseClass}-wrapper--error`, className)}>
      {label && (
        <label htmlFor={inputId} className={`${baseClass}__label`}>
          {label}
        </label>
      )}
      
      <div className={`${baseClass}__container`}>
        <input
          id={inputId}
          className={`${baseClass}__field`}
          disabled={disabled}
          aria-invalid={!!error}
          {...props}
        />
      </div>

      {error && <p className={`${baseClass}__error-message`}>⚠ {error}</p>}
      {!error && hint && <p className={`${baseClass}__hint-message`}>{hint}</p>}
    </div>
  );
};