import React, { } from 'react'
import Loading from '../components/Loading'
import usePaginated from '../hooks/usePaginated'
import ReachLast from '../components/ReachLast'
import Post from '../components/Post'
import BodyContainer from '../components/BodyContainer'

function Home({isAuth}) {
  const {data, lastElement, loading, hasMore} = usePaginated()
  
  return (
    <BodyContainer>
      {loading && <Loading />}
      {data && data.map((post,id)=>{
        if (data.length === id + 1) {
          return(<Post key={id} post={post} isAuth={isAuth} lastElement={lastElement}/>)
        } else {
        return(<Post key={id} post={post} isAuth={isAuth} />)}})}
      {!hasMore && <ReachLast />}
    </BodyContainer>
  )
}

export default Home