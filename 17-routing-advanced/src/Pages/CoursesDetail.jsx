import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

    const params = useParams()
  return (
    <div>
        <h1>{params.id}-Courses Detail Page</h1>
    </div>
  )
}

export default CoursesDetail

