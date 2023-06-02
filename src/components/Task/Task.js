import './Task.css'

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id);
}

function Task ({ id, title, body}) {
  return (
    <div className='Task-wrapper' draggable onDragStart={(e) => onDragStart(e, id)}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Task;