import User, { UserProps } from "@/app/components/User";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map((user: UserProps) => ({
    id: user.id.toString(),
  }));
}

async function getProduct(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
}

export default async function FollowerPage({ params }: any) {
  const user = await getProduct(params.id);
  return (
    <User
      id={user.id}
      name={user.name}
      username={user.username}
      email={user.email}
      phone={user.phone}
      website={user.website}
    />
  );
}
