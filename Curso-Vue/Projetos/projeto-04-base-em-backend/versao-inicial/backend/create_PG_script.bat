
@echo off
setlocal
set PATH=%PATH%;C:\Windows\System32
set PGPASSWORD=yourpasswordcomeshere
"C:\PostgreSQL\9.5\bin\psql.exe" -h localhost -U postgres -d postgres -p 5432 -f D:/PG_Script/select_query.sql"
pause
endlocal
