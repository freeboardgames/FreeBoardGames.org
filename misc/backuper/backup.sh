#!/bin/bash
echo_t() {
  echo [$(date +"%T")] $1
}

dump_csv() {
  echo_t "Dumping $1.csv"  
  psql $POSTGRES_URL -c "\COPY \"$1\" TO '$1.csv' CSV HEADER"
  gzip $1.csv
  echo_t "Uploading $1.csv.gz"
  gsutil cp $1.csv.gz gs://fbg-database-dump
  rm $1.csv.gz
}

# Auth
echo ${GCP_CREDS_BASE64} | base64 -d -- > ./gcp_creds
gcloud auth activate-service-account --key-file=./gcp_creds
# Backup
BACKUP_NAME=fbg-backup-$(date "+%Y-%m-%d")
echo_t "Dumping $BACKUP_NAME.sql"
pg_dump $POSTGRES_URL > $BACKUP_NAME.sql
gzip $BACKUP_NAME.sql
echo_t "Uploading $BACKUP_NAME.sql.gz"
gsutil cp $BACKUP_NAME.sql.gz gs://fbg-database-dump
rm $BACKUP_NAME.sql.gz
# Table Dumps
dump_csv "Games"
dump_csv "match_entity"
dump_csv "match_membership_entity"
dump_csv "room_entity"
dump_csv "room_membership_entity"
dump_csv "user_entity"

