
import React from 'react'
 export default class Movie extends React.Component{
  //  intervalID=0;
 
  componentDidMount(){
  //     this.intervalID=setInterval(()=>this.tick(),1000)

      console.log("movie Component Did mount")
    }
    componentDidUpdate(){
      console.log("movie component did update")
    }
  //   componentWillUnmount() {
  //     console.log('componentWillUnmount cleared');
  //     // clearInterval(this.intervalID)
  //  }
//    tick(){
// console.log('hello this is from tick')
//   }

render(){
  console.log("movie component mounted")
  
    return (<div>
Movie Name<input
type="text"
value={this.props.name}
name={this.props.name}
onChange={this.props.movieNameChangeEventHandler}
/>


</div>

    )
  }

}

