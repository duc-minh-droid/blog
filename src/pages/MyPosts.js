import React, { } from 'react'
import Loading from '../components/Loading'
import useQueriedData from '../hooks/useQueriedData'
import ReachLast from '../components/ReachLast'
import Post from '../components/Post'
import BodyContainer from '../components/BodyContainer'

function MyPosts({isAuth}) {
  const {data, lastElement, loading, hasMore} = useQueriedData()
  if (data.length === 0) {
    return (<BodyContainer><div className='text-center text-3xl'>You haven't post anything here!</div></BodyContainer>)
  }
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

export default MyPosts