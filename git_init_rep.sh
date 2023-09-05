#!/bin/bash

# Initialize a new README.md with the project title
echo "# new-fe-nc-news" >> README.md

# Initialize a new Git repository
git init

# Add README.md to the staging area
git add README.md

# Commit the changes
git commit -m "first commit"

# Rename the current branch to master
git branch -M master

# Add the remote repository
git remote add origin git@github.com:jdwd40/new-fe-nc-news.git

# Push the changes to the master branch
git push -u origin master
