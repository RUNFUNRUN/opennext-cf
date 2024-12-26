import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <main>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="bg-red-600 text-white text-2xl rounded-xl p-4">
            Sign Out
          </button>
        </form>
      </main>
    );
  }

  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button className="bg-blue-600 text-white text-2xl rounded-xl p-4">
          Sign In
        </button>
      </form>
    </main>
  );
}
