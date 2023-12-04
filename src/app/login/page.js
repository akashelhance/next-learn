"use client"
import Link from 'next/link'

import {useRouter} from 'next/navigation'


export default function Login(){
    return(
        <div>
            <h1>This is login page</h1>

            <h5>This is link </h5>
            <Link href="/login/loginstudent">Login Student page</Link>
            <Link href="/login/loginteacher">Login Teacher page</Link>
        </div>
    )
}