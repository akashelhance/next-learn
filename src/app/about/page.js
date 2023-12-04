import Link from "next/link";

export default function About(){
    return(
        <div>
            <h1>This is about page</h1>

            <Link href="/about/aboutstudent">About Student</Link>
            <Link href="/about/aboutteacher">About Teacher</Link>
        </div>
    )
}