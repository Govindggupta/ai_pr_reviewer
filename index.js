import { Octokit, App } from "octokit";
import {red,green, blue} from 'console-log-colors';

const octokit = new Octokit();

if (octokit) {
    console.log(blue("Octokit is ready"));
} else {
    console.log(red("Octokit is not ready"));
}

export default async function pull_request_data(link) {
  // not in the proper format for now 
  let response = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
  owner: 'TuringLang',
  repo: 'turinglang.github.io',
  pull_number: 123,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
  });
}



// let response2 = await octokit.request('GET https://api.github.com/repos/TuringLang/turinglang.github.io/pulls/123');


export default async function pr_committ(params) {
  const response_pr_commits = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
  owner: 'TuringLang',
  repo: 'DynamicPPL.jl',
  pull_number: 346,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

  
}


if (response_pr_commits){
  console.log(response_pr_commits);
}