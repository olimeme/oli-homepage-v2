import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export class GitHubService {
  static async exampleGetReq() {
    return await octokit.request("GET /repositories{?since}", {});
  }
}
