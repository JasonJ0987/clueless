FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app
COPY requirements.txt requirements.txt
COPY main.py main.py
COPY api api
COPY tests tests
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
RUN pip install -r requirements.txt
WORKDIR /app
CMD /wait && uvicorn main:app --reload --host 0.0.0.0 --port 80



# glv-cloud-cli deploy -a clueless \
#   -i  /registry.gitlab.com/xanderrubio/clueless/whatevr_image:latest \
#   -e CORS_HOST=https://XanderRubio.gitlab.io
#   -e SIGNING_KEY=87fe4a3fcfb60092dbaeb854a196bc3d9b190aed7930c734749e85245de698420c25f8e6899c421b4494e99459e01058de5daa9d49584cd62ec975da9aea33db \
# -e DATABASE_URL=mongodb://root:password@feb-23-et-14-mongo-database-service.default.svc.cluster.local \
#   -e CORS_HOST=https://sjp19-public-resources.gitlab.io



# glv-cloud-cli deploy -a mongo-database -i \
# mongo:latest -e \
# MONGO_INITDB_ROOT_USERNAME=root \
# -e MONGO_INITDB_ROOT_PASSWORD=password \
# -m /data/db \
# -p 27017 \
# -x=false


# glv-cloud-cli logs -a clueless (checking logs)
# glv-cloud-cli deploy -a clueless -d (delete)
# glv-cloud-cli deploy -a clueless -i nginx
# glv-cloud-cli list
