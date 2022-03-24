import { createStore } from "redux";
import reducer from "./cakes/cakeRecuder";

const store = createStore(reducer)

export default store

