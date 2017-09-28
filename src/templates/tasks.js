/**
 * Created by M.C on 2017/9/26.
 */
const renderTasks = tasks => {
    return tasks.map(task => {
        let done = task.done ? "ios-checkmark" : "ios-circle-outline";
        return `<li class="item item-icon-left item-button-right">
                    <i class="icon ion-${done}" data-done
                        data-task-done="${task.done ? 'done' : ''}"
                        data-task-id="${task.id}"></i>
                    ${task.title}
                    <button data-remove data-task-id="${task.id}" class="button button-assertive">
                        <i class="ion-trash-a"></i>
                    </button>
                </li>`
    }).join("");
};

exports.render = tasks => {
    if (tasks && tasks.length) {
        return `<ul class="list">${renderTasks(tasks)}</ul>`;
    } else {
        return `<h4 class="text-center">The task list is empty</h4>`;
    }
};