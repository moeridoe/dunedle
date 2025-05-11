# This file is part of Dunedle.
# Copyright (C) 2025 moeridoe
# Licensed under the GNU General Public License v3.0

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY docs/ /usr/share/nginx/html
