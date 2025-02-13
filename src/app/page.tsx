import Link from "next/link";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="my-10 mx-2">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle> New Project!</AlertTitle>
          <AlertDescription>
            You can test the application at the following{" "}
            <Link href="/sign-up" className="text-red-500 hover:underline">
              Link
            </Link>
            .
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
