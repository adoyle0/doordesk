# syntax=docker/dockerfile:experimental

FROM python
COPY . .
RUN python -m ensurepip && pip install --upgrade --no-cache-dir -r requirements.txt
CMD ["python3", "main.py"]
EXPOSE 9696
