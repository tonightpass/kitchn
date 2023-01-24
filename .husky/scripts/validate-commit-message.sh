#!/bin/bash

separator="|"
remoteGitmojis=$(curl -s https://raw.githubusercontent.com/carloscuesta/gitmoji/master/packages/gitmojis/src/gitmojis.json)
gitmojis=$(node -e "console.log(JSON.parse(process.argv[1]).gitmojis.map(gitmoji => gitmoji.emoji + ' ' + gitmoji.code))" "$remoteGitmojis")
gitmojis="$(echo "$gitmojis" | tr -d "'" | tr -d "\"" | tr -d "," | tr -d "[" | tr -d "]")"
gitmojis=($gitmojis)

emojiRegex="$( printf "${separator}%s" "${gitmojis[@]}" )"
emojiRegex="${emojiRegex:${#separator}}"

separator="|"
types=(add fix improve update remove refactor rename move upgrade downgrade release merge)
typesRegex="$( printf "${separator}%s" "${types[@]}" )"
typesRegex="${typesRegex:${#separator}}"

message="$(cat $1)"

regex="^(${emojiRegex}) (${typesRegex}) (.*[a-z0-9(-)#@']{1,})$"

echo "---------[ Commit validation ]--------"
echo ""
if [[ ! $message =~ $regex ]];
then
  echo "Your commit message is not valid! Please check our contributing guidelines:"
  echo "https://docs.onruntime.com/contributing/commits"
else
  echo "Your commit message is valid!"
fi
echo ""
echo "Your commit message was:"
echo $message
echo ""
echo "--------------------------------------"
[[ $message =~ $regex ]] || exit 1