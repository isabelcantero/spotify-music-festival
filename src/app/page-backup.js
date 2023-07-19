import styles from './page.module.css'
import Users from '@/components/Users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Welcome() {
  const users = await fetchUsers();

  return (
    <main className={styles.main}>
      <h1>Homepage</h1>

      <Users users={users} />
      
      <div>
        {JSON.stringify(users)}
      </div>

    </main>
  )
}
