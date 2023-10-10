import Button from "../components/UserButton";
import { UserProps } from "../components/User";

async function getProducts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const users = await getProducts();

  // console.log(users);
  return (
    <div className="flex-1 h-auto space-y-4">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Following</h1>
      </div>
      <a
        className="opacity-50 text-sky-600 hover:text-sky-800 transition-all text-center w-full block underline underline-offset-2"
        href="https://jsonplaceholder.typicode.com/users"
        target="_blank"
      >
        dummy data link
      </a>
      <ul
        className="flex-1 grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {users?.length > 0 &&
          users.map((user: UserProps) => (
            <li key={user.id} className="list-none">
              <Button id={user.id}>{user.name}</Button>
            </li>
          ))}
      </ul>
    </div>
  );
}
