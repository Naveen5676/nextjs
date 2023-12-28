import {useRouter} from 'next/router'
function Developer(){
    const router = useRouter();
    const id = router.query.developer
    console.log(id)

 return <h1>they developer page {id}</h1>
}

export default Developer