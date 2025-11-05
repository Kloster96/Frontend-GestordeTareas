import React from 'react'

const DeleteAlert = ({content, onDelete}) => {
  return (
    <div>
      <p className="text-sm">
        {content}
      </p>
      <div className="flex justify-end mt-6">
        <button 
          className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-rose-500 whitespace-nowrap bg-rose-100 px-4 py-2 cursor-pointer"
          type="button"
          onClick={onDelete}
        >
          Borrar
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert