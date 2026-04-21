FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY flask_auth.py ./
COPY business_py ./business_py
COPY data_py ./data_py
COPY presentation ./presentation
EXPOSE 3000
CMD ["python", "flask_auth.py"]
