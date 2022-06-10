// ** React Imports
import { Fragment, useState, useEffect } from 'react'
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getPersonas, deletePersona } from '../store'
// ** Third Party Components
import PersonaModal from './modal'
import DataTable from 'react-data-table-component'
import { ChevronDown, Trash2 } from 'react-feather'


// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
} from 'reactstrap'


// ** Table Header

const CustomHeader = ({ toggleModal }) => {
  
  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <Button className='add-new-user' color='primary' onClick={toggleModal}>
            Añadir persona
          </Button>
        </Col>
      </Row>
    </div>
  )
}

const PersonasTable = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.personas)
  
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!modalOpen)
  const columns = [
    {
      name: 'Nombre',
      sortable: true,
      minWidth: '200px',
      sortField: 'name',
      selector: row => row.name,
    },
    {
      name: 'Apellido',
      sortable: true,
      minWidth: '162px',
      sortField: 'docNumber',
      selector: row => row.lastName,
    },
    {
      name: 'Email',
      sortable: true,
      minWidth: '162px',
      sortField: 'docNumber',
      selector: row => row.email  ,
    },
    {
      name: 'Acciones',
      minWidth: '100px',
      cell: row => (
        <div className='column-action' >
          <Trash2 size={14} className='me-50' color='red' onClick={()=>dispatch(deletePersona(row.id))}/>
        </div>
      )
    }
  ]

  useEffect(()=>{
    dispatch(getPersonas())
  }, [dispatch])
  return (
    <Fragment>
      <h3>Listado de Personas</h3>
      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
          <DataTable
            subHeader
            pagination
            responsive
            columns={columns}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            data={store.personas}
            subHeaderComponent={
              <CustomHeader
                store={store}
                toggleModal={toggleModal}
              />
            }
          />
        </div>
      </Card>
      <PersonaModal open={modalOpen} toggleModal={toggleModal} />
    </Fragment>
  )
}

export default PersonasTable
