
const message = (store,event) =>{
  const payload = JSON.parse(event.data);
  console.log('receiving server message');
  console.log(payload);
  switch (payload.type) {
    case 'update_game_players':
      // store.dispatch(updateGame(payload.game, payload.current_player));
      break;
    default:
      break;
  }
}
export default message