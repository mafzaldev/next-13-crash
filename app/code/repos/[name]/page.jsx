import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Link href={"/code/repos"} className="btn btn-back">
        Back to repositories
      </Link>
      <Repo name={params.name} />
      <RepoDirs name={params.name} />
    </div>
  );
};

export default RepoPage;
