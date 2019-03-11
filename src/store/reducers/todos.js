const INITIAL_STATE = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Terminar módulo de ReactJS' },
  { id: 3, text: 'Terminar aula de flexbox' },
];

export default function todos(state = INITIAL_STATE, action) {
  // state é como o estado está antes da alteração
  // action é a action que foi disparada pela aplicação
  // no reducer há uma manipulação do acction.type para saber qual action que o reducer vai alterar
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, { id: Math.random(), text: action.payload.text }];
    }
    case 'REMOVE_TODO': {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
}
