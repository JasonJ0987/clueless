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
