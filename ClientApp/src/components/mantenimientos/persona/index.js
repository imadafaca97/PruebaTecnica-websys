// ** User List Component
import Table from './Table'

import PersonaModal from './modal'
import { useState } from 'react'


const Personas = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!modalOpen)
  return (
    <div className='app-user-list'>

      <Table />
      <PersonaModal open={modalOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default Personas
