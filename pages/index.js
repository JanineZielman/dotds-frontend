import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"
import Image from "../components/image"
import { useRouter } from 'next/router';

const Home = ({  }) => {

  return (
    <Layout>
      hello
    </Layout>
  )
}

// export async function getServerSideProps() {

//   const [objectRes] = await Promise.all([
//     fetchAPI("/objects?populate=*&sort=createdAt:desc"),
//   ])

//   const numberOfPosts = objectRes.meta.pagination.total;

//   return {
//     props: {
//       objects: objectRes.data,
//     }
//   }
// }

export default Home
