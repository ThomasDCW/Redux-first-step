let id = 3;

const initialState = [
  {
    id: 1,
    title: 'Enregistrer le tutoriel',
    completed: false,
  },
  {
    id: 2,
    title: 'Preparer le tutoriel',
    completed: true,
  },
];

const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: id++, completed: false, ...action }];
    default:
      return state;
  }
}
const state = TodoReducer(undefined, {});
const newState = TodoReducer(state, {
  type: ADD_TODO_ACTION,
  payload: { title: 'Demo' },
});

function App() {
  return (
    <div className='App'>
      <header className='App-header'>REDUX</header>
      {console.log(state, newState)}
    </div>
  );
}

export default App;
