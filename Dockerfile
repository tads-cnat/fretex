FROM python:3.10
ENV PYTHONUNBUFFERED 1
WORKDIR /code
COPY backend/requirements.txt /code/
RUN pip install -r requirements.txt
RUN cd frontend && npm install
