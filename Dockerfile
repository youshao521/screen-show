FROM registry.supos.ai/library/nginx:alpine
VOLUME /tmp
ADD ./dist/ /var/html/
ADD ./nginx.conf /etc/nginx/nginx.conf
#ENTRYPOINT ["sh","-c","java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar"]
