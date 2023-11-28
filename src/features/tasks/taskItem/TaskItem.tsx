import Checkbox from '@mui/material/Checkbox';
import styles from './TaskItem.module.scss';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
