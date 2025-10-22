import {auth} from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


async function Layout({children}:{children: React.ReactNode}) {

  const {has} = await auth();
  const hasStarterPlan = has({plan: "starter"});
  const hasProPlan = has({plan: "pro"});

  const isPaidMember = hasStarterPlan || hasProPlan;

  if(!isPaidMember){
    // return <div> You're not a paid member!</div>
    redirect('/');
  }
  return (
    <>
      {children}
    </>
  );
}

export default Layout;
