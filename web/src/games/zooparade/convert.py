#!/usr/bin/python3
# python3 convert.py | xclip -selection c
import re
import sys

print(re.sub(r'\s+{\s+id:\s(.*),\s+color:\s(.*),\s+value:\s(.*),\s+},', r'card(\1, \2, \3),', sys.stdin.read()))
