import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  )
}

/*Agregar funcionalidad Login*/
export default SignInPage;
