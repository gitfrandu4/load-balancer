FROM nginx:1.21.3-alpine

# COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
#WORKDIR /usr/share/nginx/html

# COPY . .

EXPOSE 80

