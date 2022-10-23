#!/bin/bash

separator="|"
gitmojis=(🎨 ⚡️ 🔥 🐛 🚑️ ✨ 📝 🚀 💄 🎉 ✅ 🔒️ 🔐 🔖 🚨 🚧 💚 ⬇️ ⬆️ 📌 👷 📈 ♻️ ➕ ➖ 🔧 🔨 🌐 ✏️ 💩 ⏪️ 🔀 📦️ 👽️ 🚚 📄 💥 🍱 ♿️ 💡 🍻 💬 🗃️ 🔊 🔇 👥 🚸 🏗️ 📱 🤡 🥚 🙈 📸 ⚗️ 🔍️ 🏷️ 🌱 🚩 🥅 💫 🗑️ 🛂 🩹 🧐 ⚰️ 🧪 👔 🩺 🧱 🧑‍💻 💸)
emojiRegex="$( printf "${separator}%s" "${gitmojis[@]}" )"
emojiRegex="${emojiRegex:${#separator}}"

separator="|"
types=(add fix improve update remove refactor rename move upgrade downgrade)
typesRegex="$( printf "${separator}%s" "${types[@]}" )"
typesRegex="${typesRegex:${#separator}}"

message="$(cat $1)"

regex="^(${emojiRegex}) (${typesRegex}) (.*[a-z0-9]{1,})$"

if [[ ! $message =~ $regex ]];
then
  echo "-"
  echo "-"
  echo "-"
  echo "🚨 Wrong commit message! 😕"
  echo "The commit message must have this format:"
  echo "<gitmoji> <type> <description> [(#<issue number>)]"
  echo "[optional body]"
  echo "[optional footer(s)]"
  echo "-"
  echo "Should start with an emote from gitmoji and verb in imperative mood: add, fix, improve, update, remove, refactor, rename, move, upgrade, downgrade"
  echo "Example: ✨ add login button"
  echo "-"
  echo "Your commit message was:"
  echo $message
  echo "-"
  echo "For more information, check script in .husky/commit-msg"
  echo "-"
  exit 1
else
  echo " "
  echo "✔️ Commit message validted!"
  echo " "
fi