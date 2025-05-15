# © 2025 moeridoe
# Licensed under CC BY-NC-SA 4.0
# https://creativecommons.org/licenses/by-nc-sa/4.0/

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY docs/ /usr/share/nginx/html
