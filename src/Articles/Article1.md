# Extending scope of use of Redux for reuse: Open Close Principal On Redux

***

## Open Close Principal 
	A component should be open for extension but closed for modification

***

## Application: Reusable code, DRY code, Easy Debgging and Maintainance
## Example Use Case:

Suppose you are working with more that one react apps and all of them uses some reducer with little to no change. Let's say a reducer for Profile state. All of your react app have profile state and the corrosponding reducers have lot of repeated code.

If there is some funtamental structural change in profile state you will have to make changes in each reducer. Certainly, not a good design and maintainance wil be cumbersome. 

**Solution:** You can have a npm package that exports a template reducer. Now you can install that package and import that reducer. Any fundamental change can be done only at the node package and all app that uses that package can update to new version of package with added fundamental changes. Moreover, you can also have different versions of that package thus, reducer.

Very much possible, some of your apps will have the requirement to change or extend the template reducer to some entent. Therefore, your reducer will have to be easily extendable. 

##### Following is a template for Extendable Redux reducer:
```
function State1(state= { /*Default initial state*/ }, action ) {
	switch(action.type) {
		case 'updateState1':
			state = { ...action.payload }
			break;
		/*Rest of your cases*/
	}
}
export default State1;
```

### To extend the initial state of the Reducer

Utilize this code where you initilize you Redux global Store
```
import { createStore, combineReducers } from 'redux';
import State1 from './reducer/State1.js';

var newState = State1(undefined, {})  //Initial state
newState.key1 = "some value"  // Extend and modify the default initial state

const Store = createStore(combineReducers({ State1, /*rest of your staets*/ }), { State1: newState, /*Rest of initial state, if any*/ }); 
/* pass the new Initial state as parameter to the createStore as key value pair dict */

export default Store;
```

Redux reducer are nothing more that a usual javaScript function. Redux reducer takes two parameters, state and action. If state is not provided it uses the default state given in function declaration.

## Extending the actions of Reducer
To extend action we get the whole state modify it and dispatch with action.type as 'updateState1'

An example Action dispatcher:
```
import Store from './../Store.js' //import the global Redux store

function Action1(params){
let state1 = Store.getState().State1;
/* Make changes to the state 1 */

	Store.dispatch({
		type: 'updateState1,'
		payload: {...state1}
	})
}
```
