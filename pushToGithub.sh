#!/bin/bash
# author xzx
# desp push to github desktop-music
git init
git add .
git commit -m"$1"
git remote add origin git@github.com:xzx-dalao/react-163music.git
git pull origin master
git push -u origin master


