# docker build -t "fbg-backuper" ./
FROM gcr.io/google.com/cloudsdktool/cloud-sdk:latest

RUN apt-get -y update; apt-get -y --no-install-recommends install postgresql-client

ENV GOOGLE_APPLICATION_CREDENTIALS ./gcp_creds

COPY ./backup.sh ./

RUN chmod u+x ./backup.sh

CMD ./backup.sh