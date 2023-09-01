import React from 'react'

function BlogItem(props) {
    return (
        <div className='col-sm-12 col-md-4'>
            <h1> {props.name} </h1>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default BlogItem
