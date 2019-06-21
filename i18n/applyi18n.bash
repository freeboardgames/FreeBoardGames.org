#!/bin/bash
for i in i18n/*.po; do
    [ -f "$i" ] || break
    yarn run --silent ttag po2json $i > $i.json
done
