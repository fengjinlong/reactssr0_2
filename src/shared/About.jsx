import React from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'

// hooks 待完善
// const About = () => {
//   return (
//     <div>
//     About
//     </div>
//   )
// }

class About extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {

  }
  render () {
    return (
      <div>
        <p>About</p>
        <p>数据：{this.props.data}</p>
      </div>
    )
  }
}
About.loadData = store => {
  console.log(99999999999999999)
  return Axios.get("http://localhost:3000/api").then(res => {
    store.dispatch({
      type: "CH",
      // payload: res.data.data
      payload: 'res.data.data'
    });
  });
}

function mapStateToProps (state) {
  return {
    data: state.data
  }
}
function mapDiapatchToProps (dispatch) {
  return {
    changeData(data) {
      dispatch({
        type: 'CH',
        payload: data
      })
    }
  }
}
export default connect(mapStateToProps, mapDiapatchToProps)(About)