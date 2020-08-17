export const config = {
  "dev": {
    "username": "udagram",
    "password": "8JY35s1O2!",
    "database": "udagram",
    "host": "udagram.cokzmjqlyw72.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "eu-central-1", /*original: us-east-2*/
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruben-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
