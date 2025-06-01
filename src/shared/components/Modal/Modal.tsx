import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

import './style.css';

interface ModalProps {
  children: ReactNode;
}

export const Modal = forwardRef<{ open: () => void }, ModalProps>(({ children }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current?.showModal();
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="custom-dialog">
            {children}
            <form method='dialog' className="dialog-footer">
                <button className="close-button">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root') as HTMLElement
    )
});