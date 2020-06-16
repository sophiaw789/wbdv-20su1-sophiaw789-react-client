const findLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/lessons/${lessonId}`)
        .then(response => response.json())

const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/modules/${moduleId}/lessons`)
        .then(response => response.json())

const createLesson = (moduleId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/lessons/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const updateLesson = (lessonId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export default {
    updateLesson,
    deleteLesson,
    createLesson,
    findLessonsForModule,
    findLesson
}