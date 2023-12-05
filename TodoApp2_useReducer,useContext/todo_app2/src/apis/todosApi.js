
import { API } from './axiosClient'

export const getAllTodo = async () => {
    const result = await API.get('/api/v1/todos')
    return result
}
export const addTodo = async (data) => {
    const result = await API.post('/api/v1/todos', data)
    return result
}
export const getTodosById = async (id) => {
    const result = await API.get(`/api/v1/todos/${id}`)
    return result
}
export const updateTodo = async (id, data) => {
    const result = await API.patch(`/api/v1/todos/${id}`, data)
    return result
}
// export const deleteTodo = async (id, data) => {
//     const result = await API.delete(`/api/v1/todos/${id}`, data)
//     return result
// }