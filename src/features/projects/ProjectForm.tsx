import { useRef } from 'react';
import { Input } from '../../shared/components/Input/Input';
import { Modal } from '../../shared/components/Modal/Modal';
import './ProjectForm.css';

export function ProjectForm({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const handleSave = () => {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dateValue = date.current.value;

    if (titleValue.trim() === '' || descriptionValue.trim() === '' || dateValue.trim() === '') {
      modal.current.open();
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