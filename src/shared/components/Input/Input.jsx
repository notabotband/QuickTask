import { forwardRef } from 'react';

export const Input = forwardRef(({ label, textarea, ...props}, ref) => {
    return (
        <p>
            <label>{label}</label>
            {textarea ? <textarea ref={ref} {...props} /> : <input ref={ref} {...props} />}
        </p>
    )
});