upstream api {
    server backend:8081;
}

server {

    listen 8080;

    charset utf-8;


    # Api
    location /api/ {
        proxy_pass http://api$request_uri;
    }

    location /static/rest_framework/ {
        proxy_pass http://api$request_uri;
    }

    # Admin
    location /admin/ {
        proxy_pass http://api$request_uri;
    }

    location /static/admin/ {
        proxy_pass http://api$request_uri;
    }


    # ignore cache frontend
    location ~* (service-worker\.js)$ {    
        add_header 'Cache-Control' 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';    
        expires off;    
        proxy_no_cache 1;
    }

    location / {
      root /var/www/frontend;
      try_files $uri $uri/ /index.html;
    }

}