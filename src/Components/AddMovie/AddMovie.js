import React, {useState} from 'react'
import {Button,Form,FormLabel,Modal} from 'react-bootstrap'

const AddMovie = ({add}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [rate, setRate] = useState("")
  const [posterUrl, setPosterUrl] = useState("")

const handleTitle = (e) => {
      setTitle(e.target.value)
  }
  
  const handleDescription = (e) => {
    setDescription(e.target.value)
}

const handleRate = (e) => {
    setRate(e.target.value)
}

const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)
}

const handleAdd =(e)=>{
let newMovie ={title,description,rate,posterUrl}
add(newMovie)
}

  return (
      <div>
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormLabel>Movie Title</FormLabel>
            <Form.Control Type="text" value={title} onChange={(e)=>handleTitle(e)}/>
            <FormLabel>Description</FormLabel>
            <Form.Control Type="text" value={description} onChange={(e)=>handleDescription(e)}/>
            <FormLabel>Rate</FormLabel>
            <Form.Control Type="number" value={rate} onChange={(e)=>handleRate(e)}/>
            <FormLabel>PosterUrl</FormLabel>
            <Form.Control Type="url" value={posterUrl} onChange={(e)=>handlePosterUrl(e)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  

    </div>
  )
}

export default AddMovie