import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  textarea?: false;
} & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  label: string;
  textarea: true;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps | TextareaProps;

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (props, ref) => {
    const { label, textarea, ...rest } = props;
    return (
      <p>
        <label>{label}</label>
        {textarea ? (
          <textarea ref={ref as React.Ref<HTMLTextAreaElement>} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
        ) : (
          <input ref={ref as React.Ref<HTMLInputElement>} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
        )}
      </p>
    );
  }
);