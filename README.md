# tixly

Event ticket marketplace

- Microservice app using an SSR React and Next JS app for the frontend.
- Each service is created using Node and Express.
- Data for each service is held in either a Mongo database or Redis.
- The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster.
- Almost all of the code is written with Typescript.
- CI/CD workflow via GitHub, testing by Jest

This architecture is easily scalable and the application is production-ready.

Services:
- auth
- client
- expiration
- orders
- payments
- tickets

Docker k8s: 
- 3 2vVPU, 2GB pools
- ingress-nginx
- single load balancer
