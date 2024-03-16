"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  
  if (!res.ok) {
    // If the response is not okay, throw an error
    throw new Error('Failed to fetch data')
  }
  
  return res.json();
}

export default function Blog() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <main>{data.slice(0, 10).map(post => <Link href={`/blog/${post.id}`} >{post.title}</Link>)}</main>;
}
