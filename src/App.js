import { Ulli } from "./components/Ulli";

export default function App() {
  return (
    <Ulli
      list={["item1", "item2"]}
      itemFunc={(item, i) => (
        <p>
          {i} {item}
        </p>
      )}
    />
  );
}
