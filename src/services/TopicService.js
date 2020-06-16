const findTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/topics/${topicId}`)
        .then(response => response.json())
}

const findTopicsForLesson = (lessonId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/lessons/${lessonId}/topics`)
        .then(response => response.json())
}

const deleteTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/topics/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateTopic = (topicId, newTopic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(newTopic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001452943/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    findTopic,
    deleteTopic,
    createTopic,
    updateTopic,
    findTopicsForLesson
}