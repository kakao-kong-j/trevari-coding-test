FROM mesosphere/aws-cli

CMD ./aws.sh s3 sync build/ s3://trevari-coding-test  --delete