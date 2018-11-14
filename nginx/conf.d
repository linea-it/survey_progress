upstream api {
    server backend:8081;
}

upstream react {
    server frontend:8082;
}

upstream iipsrv {
    server iipserver:9000;
}

server {

    listen 8080;

    charset utf-8;


    # Api
    location /api/ {
      proxy_pass http://api$request_uri;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $server_name;
      proxy_set_header X-Real-IP $remote_addr;
    }

    location /static/rest_framework/ {
        proxy_pass http://api$request_uri;
    }

    # Admin
    location /admin/ {
      proxy_pass http://api$request_uri;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $server_name;
      proxy_set_header X-Real-IP $remote_addr;
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


    location /iipserver {
        fastcgi_pass    iipsrv;
        fastcgi_param   PATH_INFO $fastcgi_script_name;
        fastcgi_param   REQUEST_METHOD $request_method;
        fastcgi_param   QUERY_STRING $query_string;
        fastcgi_param   CONTENT_TYPE $content_type;
        fastcgi_param   CONTENT_LENGTH $content_length;
        fastcgi_param   SERVER_PROTOCOL $server_protocol;
        fastcgi_param   REQUEST_URI $request_uri;
        fastcgi_param   HTTPS $https if_not_empty;
    }

    location / {
      #root /var/www/frontend;
      #try_files $uri $uri/ /index.html;
      proxy_pass http://react$request_uri;
      proxy_set_header Host $host;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Host $server_name;
      proxy_set_header X-Real-IP $remote_addr;
    }

}
