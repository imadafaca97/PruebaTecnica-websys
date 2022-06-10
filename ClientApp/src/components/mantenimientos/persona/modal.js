// ** React Imports
import { Fragment } from 'react'

import {
  Row,
  Col,
  Label,
  Input,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Form
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addPersona, emailError } from '../store';
import {useForm, Controller} from "react-hook-form";

// ** Vars

const PersonaModal = ({ open, toggleModal }) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.personas)
  const { handleSubmit, reset, control, setError, formState: { errors } } = useForm();

  const onDiscard = () => {
    toggleModal()
    reset()
  }
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      dispatch(addPersona(data))
      toggleModal()
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  };
  const onHandleClose = () =>{
    reset()
  }
  return (
    <Fragment>
      <Modal
        isOpen={open}
        onClosed={onHandleClose}
        toggle={() => toggleModal()}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => toggleModal()}></ModalHeader>
        <ModalBody>
        <div className='text-center mb-2'>
            <h1 className='mb-1'>Agregar persona</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
                  <Col md={6} xs={12}>
                    <Label className='form-label' for='Name'>
                      Nombre
                    </Label>
                    <Controller
                      defaultValue=''
                      control={control}
                      id='Name'
                      name='Name'
                      render={({ field }) => (
                        <Input {...field} id='Name' placeholder='John' invalid={errors.Name && true} />
                      )}
                    />
                  </Col>
                  <Col md={6} xs={12}>
                    <Label className='form-label' for='LastName'>
                      Apellido
                    </Label>
                    <Controller
                      defaultValue=''
                      control={control}
                      id='LastName'
                      name='LastName'
                      render={({ field }) => (
                        <Input {...field} id='LastName' placeholder='Doe' invalid={errors.LastName && true} />
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <Label className='form-label' for='username'>
                      Email
                    </Label>
                    <Controller
                      defaultValue=''
                      control={control}
                      id='Email'
                      name='Email'
                      render={({ field }) => (
                        <Input {...field} type='Email'
                        id='Email'
                        placeholder='example@domain.com' invalid={errors.Email && true} />
                      )}
                    />
                  </Col>
                  <Col xs={12} className='text-center mt-2 pt-50'>
                    <Button type='submit' className='me-1' color='primary'>
                      Submit
                    </Button>
                    <Button
                      type='reset'
                      color='secondary'
                      outline
                      onClick={onDiscard}
                    >
                      Discard
                    </Button>
                  </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default PersonaModal
