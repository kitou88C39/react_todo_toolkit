import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { createTask, handleModalOpen } from '../taskSlice';
import styles from './TaskForm.module.scss';

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id='outlined-basic'
          label={!edit ? 'New Task' : editData.title}
          variant='outlined'
          inputRef={register}
          name='taskTitle'
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type='submit' className={styles.submit_button}>
              Submit
            </button>
            <button
              type='button'
              onClick={() => dispatch(handleModalOpen(false))}
              className={styles.cancel_button}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
