import Link from "next/link"

export default function studentList(){
    return(
        <div>
            <h1>Student List with dynanimc routes</h1>
            <ul>
                <li><Link href="/studentlist/akash">Akash</Link></li>
                <li><Link href="/studentlist/2">Royak</Link></li>
                <li><Link href="/studentlist/3">Tripti</Link></li>
     
            </ul>
        </div>
    )
}