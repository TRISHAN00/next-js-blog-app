"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

async function getData(params) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  
  if (!res.ok) {
    // If the response is not okay, throw an error
    throw new Error('Failed to fetch data')
  }
  
  return res.json();
}

export default function Blog({params}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(params)
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <main>{data.title}</main>;
}
