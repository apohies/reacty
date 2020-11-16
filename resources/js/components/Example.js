import React , {useEffect, useState}from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Mensaje from './Mensaje';
import Individual from './Individual';

function Example() {
    const [show, setShow] = useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(()=>{

      var a = document.getElementById('example');
      var name1=a.getAttribute('data-name');
      var name2=a.getAttribute('data-apellido');
     
      setName(name1);
      setEmail(name2);

    },[])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body"> im mister nachos!</div>
               
                    </div>
                </div>

                <Mensaje></Mensaje>

            </div>

            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
    <Modal.Body> {name} {email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
