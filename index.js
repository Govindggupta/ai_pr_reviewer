import { Octokit, App } from "octokit";
import {red,green, blue} from 'console-log-colors';

const octokit = new Octokit();

if (octokit) {
    console.log(blue("Octokit is ready"));
} else {
    console.log(red("Octokit is not ready"));
}

let response = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
  owner: 'TuringLang',
  repo: 'turinglang.github.io',
  pull_number: 123,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

if (response) {
    console.log(blue("Response is ready"));
    console.log((response));
} else {
    console.log(red("Response is not ready"));
}