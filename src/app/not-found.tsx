import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Not Found</h1>
            <p className="text-lg">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="text-blue-500 hover:underline flex items-center gap-2"
            >
                <ArrowLeftIcon className="w-4 h-4" />
                Go back to the home page
            </Link>
        </div>
    )
}
