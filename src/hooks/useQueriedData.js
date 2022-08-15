import {useEffect, useState, useRef, useCallback} from 'react'
import { query, startAfter, limit, getDocs, orderBy, where } from "firebase/firestore";
import { blogsDB, auth } from '../fb-config'

export function useQueriedData() {
    const [data, setData] = useState([])
    const [lastDoc, setLastDoc] = useState({})
    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [ID, setID] = useState(0)

    useEffect(()=>{
        async function getData() {
            let result = []
            const firstQuery = query(blogsDB, limit(10), orderBy('createdAt', 'desc'), where("author.id", "==", ID))
            const firstSnapshots = await getDocs(firstQuery)
            firstSnapshots.forEach(doc=>{
                const data = doc.data()
                result.push({...data, id: doc.id})
            })
            setData(result)
            setHasMore(firstSnapshots.docs.length>0)
            const lastVisible = firstSnapshots.docs[firstSnapshots.docs.length-1]
            setLastDoc(lastVisible)
            setLoading(false)
        }
        auth.onAuthStateChanged((user)=>{
            if (user) {
                setID(auth.currentUser.uid)
                getData()
            }
          })
    }, [ID])
    
    const fetchMore = async () => {
        let result = []
        const fetchQuery = query(blogsDB, limit(5), orderBy('createdAt', 'desc'), where("author.id", "==", ID), startAfter(lastDoc))
        const fetchSnapshots = await getDocs(fetchQuery)
        fetchSnapshots.forEach(doc=>{
            const data = doc.data()
            result.push({...data, id: doc.id})
        })
        setData(lastResult => [...lastResult, ...result])
        setHasMore(fetchSnapshots.docs.length>0)
        const lastVisible = fetchSnapshots.docs[fetchSnapshots.docs.length - 1]
        setLastDoc(lastVisible)
        setLoading(false)
    }

    const observer = useRef()
    const lastElement = useCallback(node=>{
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries=>{
        if (entries[0].isIntersecting && hasMore) {
            fetchMore()
        }
        })
        if (node) observer.current.observe(node)
    }, [data])

    return {data, lastElement, loading, hasMore}
}

export default useQueriedData