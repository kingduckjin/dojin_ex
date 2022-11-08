import Event1 from "./event1";
import Event2 from "./event2";

export default function App() {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '3em',
    textDecoration: 'none',
    marginBottom: '10px',
  }

  return (
    <>
      <Event1 style={style} />
      <Event2 style={style} />
    </>
  );
}
