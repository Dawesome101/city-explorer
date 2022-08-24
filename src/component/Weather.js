import React from "react";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Toast from 'react-bootstrap/Toast';
import Collapse from 'react-bootstrap/Collapse';
import '../css/Weather.css'

// const [showA, setShowA] = useState(true);
// const [showB, setShowB] = useState(true);

// const toggleShowA = () => setShowA(!showA);
// const toggleShowB = () => setShowB(!showB);

class Weather extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showToast: false,
  //   };
  // }

  // toggleShowOpen = () => {
  //   this.setState({showToast: true})
  // }
  // toggleShowClose = () => {
  //   this.setState({showToast: true})
  // }
// debug = () => {
//   console.log(this.props.forcast.data[0]);
// }
  render(){
    return(
      // <Row>
      //   <Col md={6} className="mb-2">
      //     {/* <Button onClick={() => this.props.handleToggleToast()} className="mb-2">
      //       Toggle Toast <strong>with</strong> Animation
      //     </Button> */}
      //     <Toast className='toast' show={this.props.showToast} onClose={() => this.props.handleToggleToast(false)}>
      //       <Toast.Header>
      //         {/* <img
      //           src="holder.js/20x20?text=%20"
      //           className="rounded me-2"
      //           alt=""
      //         /> */}
      //         <strong className="me-auto">{this.props.forcast.data[0].city}</strong>
      //         <small>3 Day Forcast</small>
      //       </Toast.Header>
      //       <Toast.Body>
      //       {
      //         this.props.forcast.data.map((v, i) => {
      //           return <p key={i}>`Low of {v.low_temp} and a high of {v.high_temp} with {v.description} : {v.date}`</p>
      //         })
      //       }
              
            
      //       </Toast.Body>
      //     </Toast>
      //   </Col>
      // </Row>
      // <Button
      //   onClick={() => setOpen(!open)}
      //   aria-controls="example-collapse-text"
      //   aria-expanded={open}
      // >
      //   click
      // </Button>
      <div className='collapse-cnt'>
        <Collapse className='collapse' in={this.props.showWeather}>
          <div id="collapse-forcast">
            <h2>{this.props.forcast.data[0].city} Three Day Forcast:</h2>
            {
              this.props.forcast.data.map((v, i) => {
                return <p key={i}>Low of {v.low_temp} and a high of {v.high_temp} with {v.description} : {v.date}</p>
              })
            }
          </div>
        </Collapse>
      </div>
      
    );
  }
}

export default Weather