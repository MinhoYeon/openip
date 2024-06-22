import { useUsers } from '@/api/useUsers';
import HeaderNavi from '@/components/header-navi';



export default function About() {

  const { data, error, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <HeaderNavi />
      <div>about</div>
      <h1>Users</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}> 
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}


