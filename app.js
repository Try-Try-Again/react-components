class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);

// {props.todos.map(todo =>
//   <TodoListItem todo={todo} />
// )}

//{/* <GroceryListItem item={props.groceryItems[0]}/>
//<GroceryListItem item={props.groceryItems[1]}/> */}

var App = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['milk', 'eggs']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));