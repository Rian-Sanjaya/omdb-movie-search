import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className="loading-container">
      <Spinner animation="border" role="status" />
    </div>
  )
}

export default Loading;