import React from 'react'
import BlogItem from './BlogItem'

const BlogsData = [
    {
        name: "Blog 1",
        description: "Bla Bla Bla Bla"
    },
    {
        name: "Blog 2",
        description: "Bla Bla Bla Bla"
    },
    {
        name: "Blog 3",
        description: "Bla Bla Bla Bla"
    },
]

function Blog() {
    return (
        <section >
            <div className='container-fluid'>
                <div className='row'>
                    {BlogsData.map((data) => {
                        return (
                            <BlogItem name={data.name} desc={data.description} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blog
