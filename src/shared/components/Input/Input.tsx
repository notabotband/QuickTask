import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  textarea?: boolean;
} & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({ label, textarea, ...props }, ref) => {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea ref={ref as any} {...props} /> : <input ref={ref as any} {...props} />}
    </p>
  )
});