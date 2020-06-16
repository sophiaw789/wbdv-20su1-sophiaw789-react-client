const findModule = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/modules/${moduleId}`)
        .then(response => response.json())
}

const findModulesForCourse = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/courses/${courseId}/modules`)
        .then(response => response.json())
}

const deleteModule = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/modules/${moduleId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateModule = (moduleId, newModule) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(newModule),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/courses/${courseId}/modules`, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findModule,
    deleteModule,
    createModule,
    updateModule,
    findModulesForCourse
}