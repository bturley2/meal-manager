FROM golang:1.17

## Create workdir and add all relevant files to it
RUN mkdir /app
ADD . /app
WORKDIR /app

## Download dependencies listed in the go module
RUN go mod download

## Compile the code
RUN go build -o main .

## Run the webserver
CMD ["/app/main"]