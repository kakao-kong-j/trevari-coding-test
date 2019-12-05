FROM mesosphere/aws-cli

COPY ./build /build

CMD s3 sync /build/ s3://${S3_NAME} --delete