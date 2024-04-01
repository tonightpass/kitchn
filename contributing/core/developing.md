# Developing

- The development branch is `master`.
- All pull requests should be opened against `master`.

To develop locally:

1.  Clone the Kitchn repository (download only recent commits for faster clone):
   ```
   git clone https://github.com/tonightpass/kitchn.git
   ```
1.  Create a new branch (**the branch name must be written in lower case**):
   ```
   git checkout -b MY_GITHUB_USERNAME/MY_BRANCH_NAME origin/master
   ```
1.  Enable pnpm:
   ```
   corepack enable pnpm
   ```
1.  Install the dependencies with:
   ```
   pnpm i
   ```
1.  Start developing and watch for code changes:
   ```
   pnpm dev
   ```

1.  Install the [Gitmoji extension for VSCode](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode) for git commit messages.    

1.  When your changes are finished, commit them to the branch (**the commit message must be written in lower case**):
   ```
   git add .
   git commit -m "INSERT_THE_APPROPRIATE_GITMOJI_HERE DESCRIBE_YOUR_CHANGES_HERE"
   ```
1.  To open a pull request, you can go to [the "Pull requests" tab of our GitHub repository](https://github.com/tonightpass/kitchn/pulls), open your pull request, assign yourself to it, add the relevant label(s), add it to the "Kitchn Plan" project, then create it and link the issue you're solving to the pull request.
