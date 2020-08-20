FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist/floor-planner-ui /usr/share/nginx/html
COPY replace_api_url.sh /

CMD ["sh", "replace_api_url.sh"]
