@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\sails\bin\sails.js" %*
) ELSE (
  node  "%~dp0\..\sails\bin\sails.js" %*
)