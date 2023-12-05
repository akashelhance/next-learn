"use client"

export default function page({params}){
    console.log(params)
    return(
        <div>
            <h1>Displaying the student with dyanmic list and id</h1>
            <h3>Name : {params.id}</h3>
        </div>
    )
}