# penalty-catalog
The source code for the penalty catalog application is managed in this repository.  This is a hybrid app based on the Ionic Framework.  The application is developed by Marco Achammer (maggo@gmail.com) and Steffen Schwarz (schwarzs395@gmail.com).

## Quick Start

```bash
#RUN ionic frontend / build docker image (soon via docker-compose.yml)
cd client/
docker image build -t ["image-name"]
docker container run -p 8100:8100 --rm "image-name"
