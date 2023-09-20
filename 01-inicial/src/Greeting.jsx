export function Greeting({ title, name }) {
  return (
    <div>
      <h1>
        {title} {name} Desde el componente "Greeting"
      </h1>
      <hr />
    </div>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>UserCard component</h1>
      <h2>{name}</h2>
      <p>💵{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
      <hr />
    </div>
  );
}
