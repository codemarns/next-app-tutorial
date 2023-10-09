import User, { UserProps } from "@/app/components/User";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map((user: UserProps) => ({
    id: [user.id.toString()],
  }));
}

async function getProducts(ids: any) {
  const promises = [];
  for (const id of ids) {
    const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    promises.push(res);
  }
  const data = await Promise.all(promises);
  return await Promise.all(data.map((e) => e.json()));
}

export default async function UserPage({ params }: any) {
  const users = await getProducts(params.id);
  // console.log({users})
  return (
    users.length > 0 &&
    users.map((user: any) => (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        phone={user.phone}
        website={user.website}
      />
    ))
  );
}
