import React,{useEffect, useState} from 'react'
import UserItem from '../../components/user-item'
import { host } from '../../configs'
import Layout from '../../layouts/Layout'
import { useRouter } from 'next/router'
import SingleUser from '../../components/single-user'

// export default function UserDetail({detail:{data}}){
  export default function UserDetail(){
  const router = useRouter()
  const { uid } = router.query
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
         
  useEffect(()=>{
    host.get(`users/${uid}`)
           .then(response => { 
              setData(response.data.data)
              setLoading(false)
        })
   }, [host,uid])

if (loading || !data) return <div> Loading... </div>
console.log(data)
    return (
    <>
    <Layout>
    <SingleUser user={data && data} key={data && data.id} />
    </Layout>
    </>)
}

// export const getStaticProps  = async ({params}) => {
//     const res = await host.get(`users/${params.uid}`);
//     const detail = await res.data;
//     console.log(detail)
//     return {
//         props: { detail }
//     };
// }

// export const getStaticPaths = async (context) => {
//     console.log(context)
//     const res = await host.get(`users?page=2`);
//     const paths = res.data.data.map((item) => ({
//       params: { uid: item.id.toString() },
//     }
//     ));
  
//     return {
//       paths,
//       fallback: false,
//     };
//   };