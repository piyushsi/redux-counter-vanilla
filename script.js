function counter(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "res":
      return 0;
    default:
      return state;
  }
}
const store = Redux.createStore(counter);
document.querySelector(".inc").addEventListener("click", () => {
  store.dispatch({ type: "inc" });
});
document.querySelector(".dec").addEventListener("click", () => {
  store.dispatch({ type: "dec" });
});
document.querySelector(".res").addEventListener("click", () => {
  store.dispatch({ type: "res" });
});
store.subscribe(
  () => (document.querySelector("h1").innerText = store.getState())
);
