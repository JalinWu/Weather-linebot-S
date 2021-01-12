@echo on

@REM cd /d "%~dp0"

git.exe add .
git.exe commit -m "dev"
git.exe push origin master

EXIT