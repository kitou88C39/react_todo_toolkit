import TextField from '@mui/material/TextField';
import styles from './TaskForm.module.scss';

const TaskForm: React.FC = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form} noValidate autoComplete='off'>
        <TextField id='outlined-basic' label='New Task' variant='outlined' />
      </form>
    </div>
  );
};

export default TaskForm;
