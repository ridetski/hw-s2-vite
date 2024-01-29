import { useState } from 'react'
import Affairs from './affairs/Affairs'

// types
export type AffairPriorityType = string // need to fix any

export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any


    return affairs // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any

    return affairs // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        // need to fix
    }

    return (
        <div id={'hw2'}>
            <div >Homework #2</div>
            <div >
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2

/* const toggleTodoCompleted = (id: string) => setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ))

const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
}

const editFocus = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, editable: !todo.editable } : todo ))
}

const editTodo = (e: React.ChangeEvent<HTMLDivElement>, id: string) => {
    const text = e.currentTarget.textContent
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: text } : todo ))
    console.log('id: ', id, '| text: ', text)
}

filtered === 'completed' ? filteredTodos = todos.filter(todo => todo.completed === true) : 
filtered === 'active' ? filteredTodos = todos.filter(todo => todo.completed === false) : filteredTodos = todos */