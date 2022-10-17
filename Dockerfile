FROM python:3.10
WORKDIR /code
COPY backend/requirements.txt /code/
RUN pip install -r requirements.txt
