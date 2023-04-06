import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Link href={"/code/repos"} className="btn btn-back">
        Back to repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading dirs...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
