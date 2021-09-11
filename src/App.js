import React from 'react'
import Movie from './Movie'
import Product from './Product'
// import CreateMovie from './CreateMovie';


class App extends React.Component {

  state = {
    movies: 
      { id: 1, name: 'movie1', rating: 4, genre: 'comedy' },
      
      product:[
        {name:"Banana"}
    ]
  }

  movieNameChangeEventHandler = (event) => {
    let copy={...this.state.movies}
        copy.name = event.target.value;
    this.setState({ movies:copy })
    console.log(copy)
  }
  productNameChangeEventHandler = (event) => {
    let copy1={...this.state.product[0]}
        copy1.name = event.target.value;
    this.setState({ product:copy1 })
    console.log(copy1)

  }
  componentDidMount(){
     this.timerID=setInterval(()=>this.tick,1000)
    console.log("App Component Did mount")
  // clearInterval(this.timerID,1000)
  }
  // componentWillUnmount(){
  // console.log("hello this is componentWillUnmount")
  // // clearInterval(this.intervalID)

  // }
  componentDidUpdate(){
    this.timerID=setInterval(()=>this.tick,1000)

    console.log("App component did update")
  }

// shouldComponet

// tick(){
//   this.setState({product:{
//     name:" this is from settimeout product"
//   }});
// }
  render()
   {
     
console.log("App component did render")
    return <div>
<div>
<Movie
    name={this.state.movies.name}
    movieNameChangeEventHandler={(event)=>{this.movieNameChangeEventHandler(event)}}
    />
  </div>

  <Product
        name={this.state.product.name}
        productNameChangeEventHandler={(event)=>this.productNameChangeEventHandler(event)}  
        />
    </div>
  }
}
export default App;