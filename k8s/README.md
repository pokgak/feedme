# SOLUTION

## Multipass VM

```
mp launch lts --name feedme --cpus=2 --memory=8G --disk=50G
```

## setup basic

```
kubectl create ns apps
kubectl create secret docker-registry dockerconfigjson-ghcr-io \
    --docker-server=https://ghcr.io \
    --docker-username=pokgak \
    --docker-password=<gh-auth-token> \
    --namespace=apps
```

## create configmap for Baselime

```
kubectl create -napps configmap feedme-config --from-literal=BASELIME_KEY=<baselime-api-key>
```
