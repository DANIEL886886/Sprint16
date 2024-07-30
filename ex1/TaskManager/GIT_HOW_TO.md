# 🛠 Clone and install the project

1. Clone this repository in the desired folder:

    `git clone <repo_url>`

2. Navigate into the project directory:

    `cd <folder_name>`

3. Install by running:

    `npm install`

    > Run this command once - when you're installing  the project. 

4. When installation is complete, you can start the server in development mode:

    `npm start`


### 💻 Base code

After clonning this repo you have the initial code, ready and you're ready to start working on your task.

❗️ **Ensure you're on the right branch when working on a new feature.** 

Each student should work on a branch named by this convention: `<task_name>_<name>_<surname>`

💡 Example:

`task_viewer_sapovalov_alexandru`

Initially, after cloning the repo by default, you will be on the `main` branch. So you will need to create locally the branch you will be working on from there (named according to the convention described above).

`git checkout -b ＜new-branch＞`

>The above example simultaneously creates and checks out ＜new-branch＞. The -b option is a convenience flag that tells Git to run git branch before running git checkout ＜new-branch＞.

💡 Example:

```bash
➜ git checkout -b task_viewer_sapovalov_alexandru
Switched to a new branch 'task_viewer_sapovalov_alexandru'
```

✅ Now you can start working on your task.

#### Assingnment submission

When you're ready to submit your solution first, you should `push` your code on remote on the same branch you were working on:

1. Stage your changes
   -  `git add .`
2. Commit staged files
   - `git commit -m "your_commit_message"`
3. Push committed files on remote, branch name should be specified
   - `git push origin <branch_name>` 

💡 Example:

```bash
git add.
git commit -m "task viewer component"
git push origin task_viewer_sapovalov_alexandru
```

At this point you're changes should see in console a message like this one:
```bash
➜ git push origin task_viewer_sapovalov_alexandru    
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'task_viewer_sapovalov_alexandru' on GitHub by visiting:
remote:      https://github.com/SkillBrainFrontend/Task-Manager/pull/new/task_viewer_sapovalov_alexandru
remote: 
To github.com:SkillBrainFrontend/Task-Manager.git
 * [new branch]      task_viewer_sapovalov_alexandru -> task_viewer_sapovalov_alexandru
 ``` 

**Congrats!** Your changes are on GitHub now.



 #### Saving your work locally

🚨 **You should commit your changes before switching to another branch. Otherwise, you won't be able to perform this action.**

💡 **Example:**

- You started with:
`git switch base/1.0/first-component-in-react -c working/1.0/first-component-in-react`
- You added changes working on `working/1.0/first-component-in-react` branch.
- When task is done and you want to switch to another branch: 
  - stage your changes `git add .`
  - commit yout changes `git commit -m "first-component-in-react"`
- Now your working tree is clean and you can switch to another branch.
- You can return to your branch at any time with checkout command `git checkout working/1.0/first-component-in-react`
  