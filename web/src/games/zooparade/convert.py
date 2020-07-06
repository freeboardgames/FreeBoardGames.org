#!/usr/bin/python3
# python3 convert.py | xclip -selection c
import re

regex = re.compile("""\s+{
\s+id:\s(.*),
\s+color:\s(.*),
\s+value:\s(.*),
\s+},""")

x=open("current", "r").read()

matches = regex.findall(x)
l=len(matches)
i=0
for match in matches:
  i+=1
  if (i < l): 
    print("card("+match[0]+", "+match[1]+", "+match[2]+"),")
  else:
    print("card("+match[0]+", "+match[1]+", "+match[2]+")")
