import Link from "next/link"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h2>We did not found what you looking for</h2>
            <p>Got back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;