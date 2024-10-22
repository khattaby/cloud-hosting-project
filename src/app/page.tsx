import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome</p>
      <div>
        <Link href="/admin">Go to admin page</Link>
        <Link href="/about">Go to about page</Link>
        <Link href="/article">Go to article page</Link>
        <Link href="/login">Go to login page</Link>
        <Link href="/register">Go to register page</Link>
      </div>
    </div>
  );
};

export default HomePage;
