#!/bin/bash

branchName="$(git rev-parse --abbrev-ref HEAD)"
regex="^(develop|master)$|^([a-z0-9]+)\/([a-z-]+)$"

if [[ ! $branchName =~ $regex ]];
then
  echo " "
  echo "🚨 Invalid branch name!"
  echo " "
  exit 1
else
  echo " "
  echo "✔️ Valid branch name!"
  echo " "
fi