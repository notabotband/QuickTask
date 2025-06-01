import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import './style.css';

export const Modal = forwardRef(({ children }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="custom-dialog">
            {children}
            <form method='dialog' className="dialog-footer">
                <button className="close-button">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});