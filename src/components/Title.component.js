import React from 'react'

function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h2 className="text-capitalize font-weight-bold">
                        {title}
                </h2>
            </div>
        </div>
    )
}

export default Title
