import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit();
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits",
    {
      owner: "TuringLang",
      repo: "DynamicPPL.jl",
      pull_number: 346,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  

  return NextResponse.json({
    response,
  });
}
