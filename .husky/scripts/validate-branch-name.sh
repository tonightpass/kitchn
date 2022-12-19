#!/bin/bash

branchName="$(git rev-parse --abbrev-ref HEAD)"
regex="^(develop|master)$|^([a-z0-9]+)\/([a-z-]+)$"


echo "---------[ Branch validation ]--------"
echo ""
if [[ ! $branchName =~ $regex ]] ;
then
  echo "Your branch name is not valid! Please check our contributing guidelines:"
  echo "https://docs.onruntime.com/contributing"
else
  echo "Your branch name is valid!"
fi
echo ""
[[ $branchName =~ $regex ]] || exit 1