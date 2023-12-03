import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name= "akash"/>
      <User name="ghost"/>
      <User name= "harry"/>

      <h1>hello learn next js</h1>
    </main>
  )
}

const User =(props)=>{
  return (
    <div>
      <h3>Hello this is User componemts dyanmic name - {props.name}</h3>
    </div>
  )
}