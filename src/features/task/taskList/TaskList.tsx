import styles from './TaskList.module.scss';
import sampleData from './sampleData.json';

const TaskList: React.FC = () => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskList />
      ))}
    </div>
  );
};

export default TaskList;
