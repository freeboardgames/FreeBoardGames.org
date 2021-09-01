#!/bin/bash
echo_t() {
  echo [$(date +"%T")] $1
}

dump_csv() {
  echo_t "Dumping $1.csv"  
  psql $POSTGRES_URL -c "\COPY \"$1\" TO '$1.csv' CSV HEADER"
  echo_t "Uploading $1.csv"
  gsutil cp $1.csv gs://fbg-database-dump
}

echo ${GCP_CREDS_BASE64} | base64 -d -- > ./gcp_creds
gcloud auth activate-service-account --key-file=./gcp_creds
BACKUP_NAME=fbg-backup-$(date "+%Y-%m-%d")
echo_t "Dumping $BACKUP_NAME.sql"
pg_dump $POSTGRES_URL > $BACKUP_NAME.sql
tar -czvf $BACKUP_NAME.tar.gz $BACKUP_NAME.sql
echo_t "Uploading $BACKUP_NAME.tar.gz"
gsutil cp $BACKUP_NAME.tar.gz gs://fbg-database-dump
dump_csv "Games"
dump_csv "match_entity"
dump_csv "match_membership_entity"
dump_csv "room_entity"
dump_csv "room_membership_entity"
dump_csv "user_entity"

