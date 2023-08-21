import Toast from 'react-bootstrap/Toast';

function ToastSuccess() {
  return (
    <>
      
        <Toast
          className="d-inline-block m-1"
          bg='success'        
        >
          <Toast.Header>            
            <strong className="me-auto">Success</strong>
            <small>Client Saved</small>
          </Toast.Header>
          <Toast.Body >
            The client has been saved succesfully!
          </Toast.Body>
        </Toast>
      
    </>
  );
}

export default ToastSuccess;