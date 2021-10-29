FROM golang:1.17

# RUN mkdir /app

# ADD . /app

# WORKDIR /app

# RUN go build -o main .

# CMD ["/app/main"]


WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["app"]
