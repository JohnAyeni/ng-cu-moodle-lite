# CU Moodle Lite Front-End (Angular) Contributing Guidelines
Please read about the project [here](README.md).
## Contributing to this Project

** You must have forked this repository to your account and cloned it to your PC **

Create a new branch, name it a meaningful name like the name of a feature you are working on like `git branch comment` and switch to it. (make sure you are on master before doing this).
   ```
   git branch <branch_name>
   git checkout <branch_name>
   ```
   `<branch_name>` can be replaced by your preferred name for the branch.
   The above to commands are equivalent to the following
   ```
   git checkout -b <branch_name>
   ```

* Work on your feature, stage and commit them (while you are on that particular branch).
* Check out Chris Beams's guide to writing good commit messages [here](https://chris.beams.io/posts/git-commit/).
* After you are done making changes, push the branch to your fork.
    ```
    git push -u origin <branch_name>
    ```
    The **-u** option is required only the first time you push the branch.
	**In case you have made multiple commits, you need to squash them into a single commit before pushing.**
    Use
    ```
    git rebase -i HEAD~n
    ```
    `n` is the number of commits to rebase back to.
    You will be given some options such as pick, squash etc. with the commit in front of it, select the commit to squash by adding `squash` or s
    check here for more on [squashing and rebasing](https://www.devroom.io/2011/07/05/git-squash-your-latests-commits-into-one/)

* Then create a Pull Request from that branch using GitHub.

**What after you have submitted a Pull Request?**

Well, you could wait for it to be reviewed by someone or you could attempt to fix another issue.

*OR*

You could help us in an even better way!


### Help us by reviewing others' Pull Requests! ###
If you have the time and the knowledge then you must review others' Pull Requests. This would stop Pull Requests from stacking up and will definitely mean your Pull Request would be reviewed faster.

**Things to keep in mind while reviewing a Pull Request**

If any of the following questions has a **yes** for an answer then the request shall **not** be approved.
* Will the referenced issue **not** be fixed with the Pull Request?
* Are there unnecessary changes?
* Is the commit message **not** good?
* Is a rebase required?
* Is the fix dirty (hacky)?

*Reviewers shall make sure that the reviews are done on a first come first service basis.*







## Syncing with the remote repository
When your fork is behind the main repository, there is need for you to sync.
This could happen when there are some commit made after your last push, so you would have to update your fork's `master` so you can be synced.
