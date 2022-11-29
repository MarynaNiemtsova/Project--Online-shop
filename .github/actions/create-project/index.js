const core = require("@actions/core");
const github = require("@actions/github");
const projectData = require("./data/project.json");
const { issues } = require("./data/issues");

async function run() {
  const token = core.getInput("token");
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/");

  const octokit = github.getOctokit(token);

  // Check the project isn't already created
  const existingProjects = await octokit.projects.listForRepo({
    owner,
    repo,
  });

  // Check if a project with the same name exists
  // Not extremely robust, but protects around the same action
  // running twice
  const doesProjectExist = existingProjects.data.filter(
    (project) => project.name === projectData.name
  );

  if (doesProjectExist.length > 0) {
    console.log("Project already exists", doesProjectExist);
    return;
  }

  // Create project
  const project = await octokit.projects.createForRepo({
    owner,
    repo,
    name: projectData.name,
  });
  const project_id = project.data.id;
  let defaultColumnId;

  // Create project columns
  for (const column of projectData.columns) {
    const newColumn = await octokit.projects.createColumn({
      project_id,
      name: column.name,
    });

    if (column.default === true) {
      defaultColumnId = newColumn.data.id;
    }
  }

  // Create issues and add them to the default project column
  for (const { title, body } of issues) {
    const newIssue = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
    });

    // Add this issue to the project board
    await octokit.projects.createCard({
      column_id: defaultColumnId,
      content_id: newIssue.data.id,
      content_type: "Issue",
    });
  }
}

run();
