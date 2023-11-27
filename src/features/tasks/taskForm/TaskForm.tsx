import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import styles from './TaskForm.module.scss';

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form className={styles.form} noValidate autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='New Task'
          variant='outlined'
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskForm;
