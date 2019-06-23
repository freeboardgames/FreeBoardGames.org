@echo off
for %%i in (i18n/*.po) do call yarn run --silent ttag po2json i18n/%%i > i18n/%%i.json
