FROM python:3.10

ARG app_dir=/app/

ADD requirements.txt $app_dir

WORKDIR $app_dir

RUN pip install --upgrade pip

# 利用するパッケージがかたまるまでコメントアウトしてても良さそう
RUN pip install -r requirements.txt