'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function Protected({ children }) {
const { data: session, status } = useSession()
const router = useRouter()

if (status === 'loading') return <p>Loading...</p>
if (!session) {
    router.push('/login')
    return null
}

return children
}