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
#   -i registry.gitlab.com/XanderRubio/clueless/whatevr_clueless_image:7d66559f2dbcf3b640a0f338066d361a21b6838a \
#   -e SIGNING_KEY=whatever \
#   -e DATABASE_URL=postgresql://admin:password@et-instructors-authdata-service.default.svc.cluster.local/accounts \
#   -e CORS_HOST=https://sjp19-public-resources.gitlab.io
