import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  console.log('TodoList props:', { tasks, filteredTasks })  // 👈 ЛОГ

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  console.log('hasTasks:', hasTasks, 'isEmptyFilteredTasks:', isEmptyFilteredTasks) // 👈 ЛОГ

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  if (isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  const tasksToRender = filteredTasks ?? tasks

  return (
    <ul className="todo__list">
      {tasksToRender.map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList