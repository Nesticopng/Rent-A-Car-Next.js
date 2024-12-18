import React from 'react'

function Toast({msg}: any) {
  return (
    <div>
        <div className="toast toast-top toast-end">
            <div className="alert alert-success">
                <span>{msg}</span>
            </div>
        </div>
    </div>
  )
}

export default Toast