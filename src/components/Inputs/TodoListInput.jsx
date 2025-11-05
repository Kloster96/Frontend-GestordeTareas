import React, { useState } from 'react'
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2"

const TodoListInput = ({todoList, setTodoList}) => {
    const [ option, setOption ] = useState("");

    const handleAddOption = () => {
        if(option.trim()) {
            setTodoList([...todoList, option.trim()])
        }
    };

    const handleDeleteOption = (index) => {
        const updatedArr = todoList.filter((_, idx) => idx !== index);
        setTodoList(updatedArr);
    };
    return (
        <div className="">
            {todoList.map((item, index) => (
                <div 
                    className="flex justify-between bg-gray-50 border border-gray-100 px-3 py-2 rounded-md mb-3 mt-2"
                    key={item}
                >
                    <p className="text-xs text-black">
                        <span className="text-xs text-gray-400 font-semibold mr-2">
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        {item}
                    </p>
                    <button 
                        className="text-lg text-red-500"
                        onClick={() => {
                            handleDeleteOption(index);
                        }}
                    >
                        <HiOutlineTrash className="" />
                    </button>
                </div>
            ))}
            <div className="flex items-center gap-5 mt-4">
                <input 
                    type="text" 
                    className="w-full text-[13px] text-black outline-none bg-white border border-gray-100 px-3 py-2 rounded-md"
                    placeholder="Introducir tarea"
                    value={option}
                    onChange={({target}) => setOption(target.value)}
                />
                <button 
                    onClick={handleAddOption}
                    className="card-btn text-nowrap">
                    <HiMiniPlus className="text-lg" /> Agregar
                </button>
            </div>
        </div>
    )
}

export default TodoListInput;