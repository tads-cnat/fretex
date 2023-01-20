import React, { useEffect } from 'react'
import { useContextProfile } from '..'

const Reviews = () => {
  const {user, handleSelectTab} = useContextProfile()

  useEffect(() => {
    handleSelectTab(1)
  }, [handleSelectTab])

  if(!user) return <p>Carregando...</p>
  return (
    <div>Reviews</div>
  )
}

export default Reviews