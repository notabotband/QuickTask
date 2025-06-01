import { useRef, RefObject } from 'react';
import { Input } from '../../shared/components/Input/Input';
import { Modal } from '../../shared/components/Modal/Modal';
import './ProjectForm.css';

interface ProjectFormProps {
  onAdd: (project: { title: string; description: string; date: string }) => void;
  onCancel: () => void;
}

export function ProjectForm({ onAdd, onCancel }: ProjectFormProps) {
  const modal = useRef<{ open: () => void }>(null);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const titleValue = title.current?.value || '';
    const descriptionValue = description.current?.value || '';
    const dateValue = date.current?.value || '';

    if (titleValue.trim() === '' || descriptionValue.trim() === '' || dateValue.trim() === '') {
      modal.current?.open();
      return;
    }

    onAdd({
      title: titleValue,
      description: descriptionValue,
      date: dateValue,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
        <p>Please fill in all fields</p>
      </Modal>
      <div className="project-form">
        <menu>
          <li><button className="cancel-button" onClick={onCancel}>Cancel</button></li>
          <li><button className="save-button" onClick={handleSave}>Save</button></li>
        </menu>
        <div className="form-group">
          <Input ref={title} type="text" label="Title" placeholder="Enter project title" />
        </div>
        <div className="form-group">
          <Input ref={description} textarea label="Description" placeholder="Enter project description" />
        </div>
        <div className="form-group">
          <Input ref={date} type="date" label="Due date" />
        </div>
      </div>
    </>
  );
} 