#!/bin/bash
for i in i18n/*.po; do
    [ -f "$i" ] || break
    yarn run ttag update $i src
done
