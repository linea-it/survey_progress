server {
    server_name localhost;

    listen 80;

    charset utf-8;

    access_log  /log/nginx/guni-access.log;
    error_log  /log/nginx/guni-error.log info;

    location / {
        proxy_pass http://frontend:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}