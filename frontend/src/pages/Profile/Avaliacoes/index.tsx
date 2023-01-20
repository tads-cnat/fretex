import React, { useEffect } from 'react'
import { useContextProfile } from '..'

const Avaliacoes = () => {
  const {user, handleSelectTab} = useContextProfile()

  useEffect(() => {
    handleSelectTab(2)
  }, [handleSelectTab])

  if(!user) return <p>Carregando...</p>
  return (
    <div>Avaliacoes</div>
  )
}

export default Avaliacoes